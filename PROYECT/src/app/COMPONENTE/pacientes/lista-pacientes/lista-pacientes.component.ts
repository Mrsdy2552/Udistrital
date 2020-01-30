import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { mySql } from '../../../Server/database.service';
import { MatDialog } from '@angular/material/dialog';
import { PacientesComponent } from '../pacientes.component';
import { CitasMedicasComponent } from '../../citas-medicas/citas-medicas.component';
import { MatPaginatorIntl, MatPaginator } from '@angular/material';



export interface pacientesElement {
  identificacion_pac: number;
  tipo_identificacion_pac: string;
  nombre_pac: string;
  apellido_pac?: string;
  municipio_pac: string;
  direccion_pac?: string;
  fecha_nacimiento_pac: Date;
}



@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  repetidor : any;

  constructor(private visorService: mySql, public dialog: MatDialog) { }

  displayedColumns = ['identificacion_pac', 'tipo_identificacion_pac', 'nombre_pac', 'apellido_pac',
    'municipio_pac', 'direccion_pac', 'fecha_nacimiento_pac'];

  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {

    
    this.repetidor = setInterval(() => {
      this.iniciar(); 
    }, 1000);
  }

  iniciar() {
    this.visorService.getpacientes().subscribe(
      res => {
        this.dataSource = new MatTableDataSource();
        this.dataSource.data = res;
        // console.log(this.dataSource.data);
        this.dataSource.paginator = this.paginator;
      },
      err => console.error('error visor', err)

    );

  }
  OpenModal(): void {
    const dialogRef = this.dialog.open(PacientesComponent, {});
    dialogRef.afterClosed().subscribe(
      res => {
        console.log('modal CERRADO');

      }
    );
  }


  OpenAgenda(): void {
    const dialogRef = this.dialog.open(CitasMedicasComponent, {});
    dialogRef.afterClosed().subscribe(
      res => {
        console.log('modal creacion cerrado');
      }
    )

  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
} ///cierre de la clase




