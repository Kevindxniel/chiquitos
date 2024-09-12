import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {

  constructor( private router: Router) { }
  volverInicio() {
    this.router.navigate(['/']); 
  }
}
