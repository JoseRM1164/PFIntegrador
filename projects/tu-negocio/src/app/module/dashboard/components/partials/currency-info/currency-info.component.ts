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
      this.usd = 1 / currency.rates.USD;
      this.cad = 1 / currency.rates.CAD;
      this.eur = 1 / currency.rates.EUR;
    });
  }
}
