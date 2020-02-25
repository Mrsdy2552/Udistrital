import { Component, OnInit, Output, Host } from '@angular/core';
import { mySql } from '../../Server/database.service';
import { MatDialog } from '@angular/material/dialog';
import { CitaPacienteComponent } from './cita-paciente/cita-paciente.component';
import { CreacionCitasComponent } from './creacion-citas/creacion-citas.component';


export interface DialogData {
  Id_cita: string;
 }
@Component({
  selector: 'app-citas-medicas',
  templateUrl: './citas-medicas.component.html',
  styleUrls: ['./citas-medicas.component.css']

})


export class CitasMedicasComponent implements OnInit {

  datos: any = [];
  
 constructor(private visorCitas: mySql,
    public dialog: MatDialog
  ) { }

  Id_cita: string;

  ngOnInit() {

    this.iniciar();

  }
  iniciar() {
    this.visorCitas.getcitas().subscribe(
      res => {
        this.datos = res
        // console.log('los datos son', this.datos);
      },

      err => console.error('error visor', err)
    );
  }

  OpenModalpaciente(envio) {
    this.Id_cita = envio;
    // console.log('el dato de la cita es  es:', this.Id_cita);
    
    const dialogRef = this.dialog.open(CitaPacienteComponent, {
      data: this.Id_cita 
    });
    
    dialogRef.afterClosed().subscribe(
      res => {
        // console.log('modal pacientes CERRADO');
      }
    );
  }

 openModalCitas(){
  const dialogRef = this.dialog.open(CreacionCitasComponent, {});
  
  dialogRef.afterClosed().subscribe(
    res => {
       console.log('modal pacientes CERRADO');
       this.iniciar();
    }
  );
}
}
