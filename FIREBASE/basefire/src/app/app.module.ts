import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FormsModule } from  '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ConexionService } from './services/conexion.service';
import { ListaComponent } from './componets/lista/lista.component';
import { ListaAddComponent } from './componets/lista-add/lista-add.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    ListaAddComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule, // dynamically imports firebase/analytics
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    FormsModule,
    FontAwesomeModule
  ],
 
providers: [ConexionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
