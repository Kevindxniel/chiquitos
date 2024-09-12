import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaypalService } from '../../services/paypal/paypal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../../services/carrito/carrito.service';
import { Product } from '../../services/productos/productos.service';

@Component({
  selector: 'app-pagar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit {
  productos: Product[] = [];
  showMessage = false;
  message = '';

  constructor(
    private carritoService: CarritoService,
    private paypalService: PaypalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productos = this.carritoService.getProductos();

    this.route.queryParams.subscribe(params => {
      if (params['paymentId'] && params['PayerID']) {
        this.finalizarPago(params['paymentId'], params['PayerID']);
      } else if (params['cancelled']) {
        this.showMessage = true;
        this.message = 'Se ha cancelado la compra por el usuario.';
      }
    });
  }

  getTotal(): number {
    return this.carritoService.getTotal();
  }

  pay(): void {
    this.paypalService.getAccessToken()
      .subscribe(accessToken => {
        this.paypalService.createWebProfile(accessToken.access_token, `Pago-${Math.random()}`)
          .subscribe(webProfile => {
            this.paypalService.createPayment(
              accessToken.access_token,
              webProfile.id,
              "http://localhost:4200/pagar",
              "http://localhost:4200/pagar?cancelled=true",
            ).subscribe(payment => {
              console.log(payment.id);
              window.location.href = payment.links[1].href;
              this.showMessage = true;
              this.message = 'Proceso de pago iniciado. Por favor, espere...';
            })
          })
      })
  }

  finalizarPago(paymentId: string, payerId: string): void {
    this.router.navigate(['/compras']);
  }
}