import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpParams, HttpHandler } from '@angular/common/http';
import { pacientes } from '../MODELS/pecientes.model';
import { cita_pacientes } from '../MODELS/pecientes.model';
import {  cita_medico } from '../MODELS/medicos.model';
import {  Citas } from '../MODELS/citas.model';
import {  user } from '../MODELS/User.model';




@Injectable({
  providedIn: 'root'
})
export class mySql {
  @Input() envio: string;

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

/////login 
LoginByUser (User:user){
  const{user,password} = User;


}


  ///pacientes/////////////
  getpacientes() {
    // console.log('Funciona Tablero');
    return this.http.get(`${this.API_URI}/paciente`);
  }
  deletepaciente(identificacion_pac: string) {
    return this.http.delete(`${this.API_URI}/paciente/${identificacion_pac}`);

  }

  savepaciente(paciente: pacientes) {
    return this.http.post(`${this.API_URI}/paciente`, paciente);
  }

  //////////medicos////////

  getmedico() {
    // console.log('Funciona Tablero');
    return this.http.get(`${this.API_URI}/medico`);
  }

 
  // getmedico(movSumi: string, entraMedi: string) {
  //   return this.http.get(`${this.API_URI}/comentario/${movSumi},${entraMedi}`)
  // }

  //  updatemedico(movSumi: string, entraMedi: string,estadoDB: estadoDB){
  //   return this.http.put(`${this.API_URI}/estado/${movSumi},${entraMedi}`,estadoDB)
  //  }



  //////////citas
  getcitas() {
    console.log('Funciona Tablero');
    return this.http.get(`${this.API_URI}/cita`);
  }

  savecitas(citas:Citas) {
    return this.http.post(`${this.API_URI}/cita`, citas);
  }
  consultaCita(id:number){
    return this.http.get(`${this.API_URI}/cita_medico/${id}`);
      }


  salveMedicoCita(cita_medico: cita_medico) {
    return this.http.post(`${this.API_URI}/cita_medico`, cita_medico);
  }
 
  saveCitasPaciente(cita_pacientes:cita_pacientes) {
    return this.http.post(`${this.API_URI}/cita_paciente`, cita_pacientes);
  }
 

}


