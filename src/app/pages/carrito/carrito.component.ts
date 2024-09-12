// carrito.component.ts
import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito/carrito.service';
import { Router } from '@angular/router';
import { Product } from '../../services/productos/productos.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos: Product[] = [];

  constructor(private carritoService: CarritoService, private router: Router) { }

  ngOnInit(): void {
    this.productos = this.carritoService.getProductos();
  }

  removeFromCarrito(producto: Product): void {
    this.carritoService.removeFromCarrito(producto);
    this.productos = this.carritoService.getProductos();
  }

  clearCarrito(): void {
    this.carritoService.clearCarrito();
    this.productos = [];
  }

  getTotal(): number {
    return this.carritoService.getTotal();
  }

  seguirComprando(): void {
    this.router.navigate(['/gorras']);
  }


  volverComprar(): void {
    this.router.navigate(['/gorras']);
  }

  pagar(): void {
    this.router.navigate(['/pagar']);
  }


  
}
