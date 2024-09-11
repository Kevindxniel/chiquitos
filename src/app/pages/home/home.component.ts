import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as gorraData from '../../../../public/json/gorraData.json'
import { Gorra } from '../../utils/gorra';

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

export class HomeComponent {
  gorras:Gorra[]=(gorraData as any).default;
  indiceGorra:number=randomInt(3);
  constructor() { }

  ngOnInit(): void {
    console.log(gorraData);
  }
}
