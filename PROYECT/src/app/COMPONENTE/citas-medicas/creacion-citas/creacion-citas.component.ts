import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { mySql } from '../../../Server/database.service';
import { Citas } from "../../../MODELS/citas.model";
import { DateAdapter } from '@angular/material';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-creacion-citas',
  templateUrl: './creacion-citas.component.html',
  styleUrls: ['./creacion-citas.component.css']
})
export class CreacionCitasComponent implements OnInit { 

 newcitas: Citas = {
  id_cita :0,
            fecha_cita: new Date,
            hora_cita: '',
            lugar_cita: '',
            comentario: '' 
           };
  
  constructor(
   public dialogRef: MatDialogRef<CreacionCitasComponent>,
    @Inject(MAT_DIALOG_DATA) public idcita: any,
    private mySql: mySql,
   
     ) { }

  ngOnInit() {
  
  }

 onclickNewCita() {

  this.mySql.savecitas(this.newcitas).subscribe(

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
