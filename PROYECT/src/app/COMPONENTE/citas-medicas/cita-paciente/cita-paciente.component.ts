import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { mySql } from '../../../Server/database.service';
import { HttpClientModule} from "@angular/common/http";
import { Observable } from 'rxjs';
import {FormControl} from '@angular/forms';
import { cita_pacientes} from '../../../MODELS/pecientes.model';
import { cita_medico} from '../../../MODELS/medicos.model';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cita-paciente',
  templateUrl: './cita-paciente.component.html',
  styleUrls: ['./cita-paciente.component.css'],
   
})
export class CitaPacienteComponent implements OnInit {

  newPacienteCita: cita_pacientes = {
    ingreso: 0,
    cod_paciente: null,
    cod_cita:   this.idcita
   };

  newMedicoCita: cita_medico = {
   cod_medico: null,
   cod_cita: this.idcita
      };

lado = 0;
  myControl = new FormControl();
  
  // cita: string;
  // options: string[] = ['One', 'Two', 'Three'];

  constructor(

    public dialogRef: MatDialogRef<CitaPacienteComponent>,
    @Inject(MAT_DIALOG_DATA) public idcita: any,
    private mySql: mySql,
   
     ) { }
 

ngOnInit() {
  // this.paciente
  // this.medico
  // this.pacientes();
  // this.medicos();    
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


// pacientes() {
//   this.mySql.getpacientes().subscribe(
//     res => {
//       this.paciente = res
//       // console.log("LA LISTA ES  son:", res);
//     },
//     err => console.error('error visor', err)
//   );

// }

// medicos() {
//   this.mySql.getmedico().subscribe(
//     res => {
//       this.medico = res  
//       // this.identificacion = res.cod_medico.identificacion_med
//       console.log("LA LISTA ES  son:", this.medico); 
//     },

//     err => console.error('error visor', err)
//   );

// }

agendarCita(){
console.log('medico',this.newMedicoCita);
console.log('el paciente ',this.newPacienteCita);
  

  // this.mySql.salveMedicoCita(this.newMedicoCita).subscribe(
  //   res => {
  //     console.log('boton funciona');
  //     console.log('cita guardada medico ');

      
  //   },err =>{
  //     console.error("error", err)
      
  //   }

  // );

  this.mySql.saveCitasPaciente(this.newPacienteCita).subscribe(
    res => {

      Swal.fire({
        title: 'Guardado',
        icon: 'info'
      })

      console.log(this.newPacienteCita);
      

    },

    err => {
      Swal.fire({
        title: 'ERROR',
        icon: 'error'
      })
      console.error("error", err)
    }
  );


}
}
