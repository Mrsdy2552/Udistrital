import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  faCoffee = faCoffee;
items:any;

  constructor( private conexion:ConexionService) { 
  this.conexion.listadeitem().subscribe(item => {
this.items = item;
console.log(this.items);

    })
  }

  ngOnInit() {
  }

  eliminar(item){
    this.conexion.eliminaritem(item);
    console.log('eliminado',item);
      }

}
