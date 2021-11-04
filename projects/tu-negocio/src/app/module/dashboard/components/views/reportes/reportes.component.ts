import { Component, OnInit } from '@angular/core';

import { InventariosService } from '../../../services/inventarios.service';
import { MaxPriceInv, MaxProdInv} from '../../../../../models/inventario';

declare let $: any;
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {
  maxPrice: MaxPriceInv[] = [];
  maxProd: MaxProdInv[] = [];

  public chartLabels: string[] = [];
  public chartOptions = { responsive: true };
  public dataChart: number[] = [];
  public chartData = [
    { data: this.dataChart, label: 'Inventarios' }
  ];

  public chartLabelsB: string[] = [];
  public chartOptionsB = { responsive: true };
  public dataChartB: number[] = [];
  public chartDataB = [
    { data: this.dataChartB, label: 'Productos' }
  ];

  constructor(private inventariosService: InventariosService) { }

  ngOnInit(): void {
    this.getMaxPrice();
    this.getMaxProd();
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

  getMaxProd(): void {
    this.inventariosService.getMaxProd()
    .subscribe(maxprods => {
      this.maxProd = maxprods;
      this.maxProd.forEach(prods => {
        this.chartLabelsB.push(prods._id);
        this.dataChartB.push(prods.totalUniqueProducts);
      });
    });
  }
  
  toggleSidebar() {
    $('#sidebar').toggleClass('active');
  }
}
