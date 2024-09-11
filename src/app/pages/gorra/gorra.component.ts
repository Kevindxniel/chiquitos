import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductsService } from '../../services/productos/productos.service';


@Component({
  selector: 'app-gorra',
  templateUrl: './gorra.component.html',
  styleUrls: ['./gorra.component.css']
})
export class GorraComponent implements OnInit {
  id: string = '';  
  gorra?: Product;

  constructor(private route: ActivatedRoute, private productosService: ProductsService) { }

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
}

