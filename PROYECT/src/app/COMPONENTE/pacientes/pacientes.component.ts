import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { mySql } from '../../Server/database.service';
import { pacientes } from 'src/app/MODELS/pecientes.model';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  paciente: pacientes = {
    identificacion_pac: 0,
    tipo_identificacion_pac: '',
    nombre_pac: '',
    apellido_pac: '',
    municipio_pac: '',
    direccion_pac: '',
    fecha_nacimiento_pac: new Date
  };

  constructor(

    public dialogRef: MatDialogRef<PacientesComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string,
    private mySql: mySql, ) { }

  foods: Food[] = [
    { value: 'CC', viewValue: 'CC' },
    { value: 'TI', viewValue: 'TI' },
    { value: 'Registro Civil', viewValue: 'Registro civil' },
    { value: 'CE', viewValue: 'CE' }
  ];
  ngOnInit() {

  }
  onClickEnviar() {

    this.mySql.savepaciente(this.paciente).subscribe(

      res => {

        Swal.fire({
          title: 'Guardado',
          icon: 'info'
        })

        console.log("Enviado", res);

      },

      err => {
        Swal.fire({
          title: 'ERROR',
          icon: 'error'
        })
        console.error("error", err)
      }


    )


    this.dialogRef.close();
  }



}

