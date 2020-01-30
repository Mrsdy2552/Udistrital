import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';
export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})

export class ConexionService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  item: Observable<Item[]>;
  private itemDoc: AngularFirestoreDocument<Item>;

  constructor(
    private angularfirestore: AngularFirestore
  ) { 

    this.itemsCollection = angularfirestore.collection<Item>('items');
    this.item = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  
  listadeitem(){
    return this.item;
  }
  agregaritem(item: Item){
this.itemsCollection.add(item);
  }
  eliminaritem(item){
    console.log('lelgo al server',item);
    
// this.itemDoc = this.angularfirestore.doc<Item>(´items/${item.id}´);
this.itemDoc.delete();

  }
}
