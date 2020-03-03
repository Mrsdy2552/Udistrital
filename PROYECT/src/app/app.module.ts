import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from './material.componet';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { MENUComponent } from './COMPONENTE/menu/menu.component';
import { PacientesComponent } from './COMPONENTE/pacientes/pacientes.component';
import { ListaPacientesComponent } from './COMPONENTE/pacientes/lista-pacientes/lista-pacientes.component';
import { CitasMedicasComponent } from './COMPONENTE/citas-medicas/citas-medicas.component';
import {CitaPacienteComponent  } from './COMPONENTE/citas-medicas/cita-paciente/cita-paciente.component';

import {HistoriaClinicaComponent  } from './COMPONENTE/historia-clinica/historia-clinica.component';
import { CreacionUsuariosComponent } from './COMPONENTE/creacion-usuarios/creacion-usuarios.component';
import { CreacionCitasComponent } from './COMPONENTE/citas-medicas/creacion-citas/creacion-citas.component';
import { LoginComponent } from './COMPONENTE/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MENUComponent,
    PacientesComponent,
    ListaPacientesComponent,
    CitasMedicasComponent,
    CitaPacienteComponent,
    
    HistoriaClinicaComponent,
    CreacionUsuariosComponent,
    CreacionCitasComponent,
    LoginComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
