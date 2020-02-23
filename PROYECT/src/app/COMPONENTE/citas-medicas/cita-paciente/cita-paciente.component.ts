import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { mySql } from '../../../Server/database.service';
import { HttpClientModule} from "@angular/common/http";
import { Observable } from 'rxjs';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cita-paciente',
  templateUrl: './cita-paciente.component.html',
  styleUrls: ['./cita-paciente.component.css'],
   
})
export class CitaPacienteComponent implements OnInit {

  myControl = new FormControl();
  
  paciente: any = [];
  medico: any = [];
  // cita: string;
  // options: string[] = ['One', 'Two', 'Three'];

  constructor(

    public dialogRef: MatDialogRef<CitaPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) public idcita: any,
    private mySql: mySql,
   
     ) { }
 

ngOnInit() {
  this.paciente
  this.medico
  this.pacientes();
  this.medicos();    
} 

onclicno() {
  this.dialogRef.close();
}

displayFn(subject){
  return subject ? subject.identificacion_pac : undefined;
}

displaymedi(subject){
  return subject ? subject.identificacion_med : undefined;
}


pacientes() {
  this.mySql.getpacientes().subscribe(
    res => {
      this.paciente = res
      // console.log("LA LISTA ES  son:", res);
    },
    err => console.error('error visor', err)
  );

}

medicos() {
  this.mySql.getmedico().subscribe(
    res => {
      this.medico = res
        // console.log("LA LISTA ES  son:", res);
    },

    err => console.error('error visor', err)
  );

}


}
