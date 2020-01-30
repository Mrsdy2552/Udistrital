import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { mySql } from '../../../Server/database.service';
import { HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-cita-paciente',
  templateUrl: './cita-paciente.component.html',
  styleUrls: ['./cita-paciente.component.css'],
   
})
export class CitaPacienteComponent implements OnInit {

 
  
  datos: any = [];
  // cita: string;
  options: string[] = ['One', 'Two', 'Three'];

  constructor(

    public dialogRef: MatDialogRef<CitaPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) public idcita: any,
    private mySql: mySql,
   
     ) { }



ngOnInit() {
  this.pacientes
  this.pacientes();
  // this.CITAS.Id_cita = this.IdCITA;
//  console.log('la cita es ', this.idcita);
//  this.cita = this cita ;
// this.cita = '255';
}

onclicno() {
  this.dialogRef.close();
}

displayFn(subject){
  return subject ? subject.identificacion_pac : undefined;
}


pacientes() {
  this.mySql.getpacientes().subscribe(
    res => {
      this.datos = res
      // console.log("LA LISTA ES  son:", res);
    },

    err => console.error('error visor', err)
  );

}

}
