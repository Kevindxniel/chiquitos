
import { Injectable } from '@angular/core';
import { Product } from '../productos/productos.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos: Product[] = [];
  private isProcessingPayment: boolean = false;

  constructor() { }

  addToCarrito(producto: Product): void {
    if (!this.isProcessingPayment) {
      const index = this.productos.findIndex(p => p.id === producto.id);
      if (index === -1) {
        this.productos.push(producto);
        console.log('Producto añadido al carrito:', producto);
      } else {
        console.log('El producto ya está en el carrito:', producto);
      }
    }
  }

  getProductos(): Product[] {
    return this.productos;
  }

  removeFromCarrito(producto: Product): void {
    if (!this.isProcessingPayment) {
      this.productos = this.productos.filter(p => p.id !== producto.id);
      console.log('Producto eliminado del carrito:', producto);
    }
  }

  clearCarrito(): void {
    if (!this.isProcessingPayment) {
      this.productos = [];
      console.log('Carrito vaciado');
    }
  }

  getTotal(): number {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }

  startPaymentProcess(): void {
    this.isProcessingPayment = true;
  }

  endPaymentProcess(): void {
    this.isProcessingPayment = false;
  }
}


