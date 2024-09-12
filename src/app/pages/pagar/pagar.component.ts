import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PaypalService } from '../../services/paypal/paypal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagar.component.html',
  styleUrl: './pagar.component.css'
})
export class PagarComponent implements OnInit{

  showMessage = false;
  message = '';

  constructor(private paypalService: PaypalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params['paymentId']);
      });
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
              "http://localhost:4200/login",
            ).subscribe( payment => {
              console.log(payment.id);
              window.location.href = payment.links[1].href;
              this.showMessage = true;
              this.message = 'Pago realizado con éxito!';
            })
          })
      })
  }

}
