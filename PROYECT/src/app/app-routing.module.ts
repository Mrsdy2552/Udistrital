import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './COMPONENTE/login/login.component';
import { PacientesComponent } from './COMPONENTE/pacientes/pacientes.component';
import {ListaPacientesComponent  } from './COMPONENTE/pacientes/lista-pacientes/lista-pacientes.component';
import { HistoriaClinicaComponent} from './COMPONENTE/historia-clinica/historia-clinica.component';
import { CreacionUsuariosComponent } from './COMPONENTE/creacion-usuarios/creacion-usuarios.component';
import { CitasMedicasComponent} from './COMPONENTE/citas-medicas/citas-medicas.component';
import { CitaPacienteComponent} from './COMPONENTE/citas-medicas/cita-paciente/cita-paciente.component';
import { CreacionCitasComponent } from './COMPONENTE/citas-medicas/creacion-citas/creacion-citas.component';



const routes: Routes = [
{ path:'', redirectTo: 'login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'pacientes', component: PacientesComponent },
{ path: 'ingreso', component: ListaPacientesComponent },
{ path: 'historia', component: HistoriaClinicaComponent },
{ path: 'creacion', component: CreacionUsuariosComponent },
{ path: 'citas', component: CitasMedicasComponent },
{ path: 'citas-paciente', component: CitaPacienteComponent },
{ path: 'creacion-citas', component: CreacionCitasComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
