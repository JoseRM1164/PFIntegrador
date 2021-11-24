import { Component, OnInit } from '@angular/core';

import { InventariosService } from '../../../services/inventarios.service';
import { MaxPriceInv, MaxProdInv} from '../../../../../models/inventario';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Reporte } from '../../../../../models/reporte';

declare let $: any;
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})

export class ReportesComponent implements OnInit {
  maxPrice: MaxPriceInv[] = [];
  maxProd: MaxProdInv[] = [];

  formReporte = this.formBuild.group({
    nameInven: ['', Validators.required],
    descripcionInven: ['', Validators.required]
  });

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

  constructor(private inventariosService: InventariosService,private formBuild: FormBuilder) { }

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

  getLang() {
    let lang = $("html").attr("lang");
    return lang
  }

  enviar() {
    const nuevoReporte: Reporte = {
      _id: 'Nuevo!',
      name: String(this.formReporte.value.nameInven),
      creationDate: new Date(),
      descripcion: String(this.formReporte.value.descripcionInven),
      lang: String(this.getLang()),
      uID: '10'
    };
    this.inventariosService.addReporte(nuevoReporte)
      .subscribe(inventario => this.inventariosService.inventarios.push(nuevoReporte));
    $('#newModal').modal('hide');
  }
}
