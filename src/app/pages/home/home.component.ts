import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as gorraData from '../../../../public/json/gorraData.json'
import { Gorra } from '../../utils/gorra';
import { Product, ProductsService } from '../../services/productos/productos.service';

function randomInt(max: number) {
  return Math.floor(Math.random() * max);
  }
   
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  gorras:Product[]= [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data: Product[]) => {
      this.gorras = data;
      console.log(this.gorras.map(gorra => gorra.imageUrl)); // Verifica las URLs
    });
  }
}
