import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, ProductsService } from '../../services/productos/productos.service';
import { CarritoService } from '../../services/carrito/carrito.service';

@Component({
  selector: 'app-gorra',
  templateUrl: './gorra.component.html',
  styleUrls: ['./gorra.component.css']
})
export class GorraComponent implements OnInit {
  id: string = '';  
  gorra?: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productosService: ProductsService,
    private carritoService: CarritoService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      console.log(this.id);

      if (this.id) {
        this.productosService.getProductById(this.id).subscribe((data: Product | undefined) => {
          this.gorra = data;
          console.log(this.gorra);
        });
      }
    });
  }

  addToCarrito(): void {
    if (this.gorra) {
      this.carritoService.addToCarrito(this.gorra);
      this.router.navigate(['/carrito']);
      console.log('Producto añadido al carrito:', this.gorra);
    } else {
      console.log('No hay información del producto para añadir al carrito.');
    }
  }
}