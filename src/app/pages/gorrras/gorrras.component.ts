import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductsService, Product } from '../../services/productos/productos.service';

@Component({
  selector: 'app-gorrras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gorrras.component.html',
  styleUrls: ['./gorrras.component.css']
})
export class GorrrasComponent implements OnInit {
  gorras: Product[] = []; 

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.gorras = data;
      console.log(this.gorras.map(gorra => gorra.imageUrl)); // Verifica las URLs
    });
  }

  onClickGorra(gorra: Product): void {
    this.router.navigate(['/gorra', gorra.id]);
  }
}
