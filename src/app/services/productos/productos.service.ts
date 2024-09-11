import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, getDoc } from '@angular/fire/firestore';
import { Observable, of, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export interface Product {
  id: string;
  nombre: string;
  descripcion: string;
  imageUrl: string;
  precio: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: Firestore) { }

  getProducts(): Observable<Product[]> {
    const productsRef = collection(this.firestore, 'productos');
    return collectionData(productsRef, { idField: 'id' }) as Observable<Product[]>;
  }

  getProductById(id: string): Observable<Product | undefined> {
    const productRef = doc(this.firestore, `productos/${id}`);
    return from(getDoc(productRef)).pipe(
      switchMap(docSnap => {
        if (docSnap.exists()) {
          return of({ id, ...docSnap.data() } as Product);
        } else {
          return of(undefined);
        }
      })
    );
  }
}
