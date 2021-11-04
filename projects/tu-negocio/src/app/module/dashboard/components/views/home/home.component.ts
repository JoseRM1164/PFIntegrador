import { Component, OnInit } from '@angular/core';

import { InventariosService } from '../../../services/inventarios.service';
import { MaxPriceInv } from '../../../../../models/inventario';
import { Producto } from '../../../../../models/producto';

declare let $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productos: Producto[] = [];
  maxPrice: MaxPriceInv[] = [];

  public chartLabels: string[] = [];
  public chartOptions = { responsive: true };
  public dataChart: number[] = [];
  public chartData = [
    { data: this.dataChart, label: 'Inventarios' }
  ];

  constructor(private inventariosService: InventariosService) {
  }

  ngOnInit(): void {
    this.getInventarios();
    this.getMaxPrice();
  }

  toggleSidebar() {
    $('#sidebar').toggleClass('active');
  }

  getLang() {
    let lang = $("html").attr("lang");
    return lang
  }

  getInventarios(): void {
    this.inventariosService
      .getInventarios(this.getLang())
    .subscribe(inventarios => {
      this.getLatestProds(inventarios[0]._id);
    });
    // this.inventariosService.currentInventario = this.inventarios[0];
  }
  
  getLatestProds(idinv: string): void {
    this.inventariosService
    .getProductos(idinv)
    .subscribe(productos => {
      this.productos = productos;
    });
  }

  getMaxPrice(): void {
    this.inventariosService.getMaxPriceInventarios()
    .subscribe(maxprices => {
      this.maxPrice = maxprices;
      this.maxPrice.forEach(price => {
        this.chartLabels.push(price._id);
        this.dataChart.push(price.sumTotal);
      });
    });
  }

}
