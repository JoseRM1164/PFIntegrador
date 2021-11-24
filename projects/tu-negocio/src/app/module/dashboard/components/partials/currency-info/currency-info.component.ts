import { Component, OnInit } from '@angular/core';

import { CurrencyService } from '../../../services/currency.service';

@Component({
  selector: 'app-currency-info',
  templateUrl: './currency-info.component.html',
  styleUrls: ['./currency-info.component.scss']
})
export class CurrencyInfoComponent implements OnInit {
  usd = 0;
  cad = 0;
  eur = 0;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.showCurrency();
  }

  showCurrency() {
  this.currencyService.getCurrency()
    .subscribe(currency => {
      this.usd = 23.91 / currency.rates.USD;
      this.cad = 23.91 / currency.rates.CAD;
      this.eur = 23.91 / currency.rates.EUR;
    });
  }
}
