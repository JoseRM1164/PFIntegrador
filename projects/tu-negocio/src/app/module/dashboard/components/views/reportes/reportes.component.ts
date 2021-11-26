import { Component, OnInit } from '@angular/core';

import { InventariosService } from '../../../services/inventarios.service';
import { MaxPriceInv, MaxProdInv, qPersoInv} from '../../../../../models/inventario';
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
  qPerso : qPersoInv[] = [];

  formReporte = this.formBuild.group({
    nameInven: ['', Validators.required],
    descripcionInven: ['', Validators.required],
  });
  formInfo = this.formBuild.group({
    nameInven: ['', Validators.required],
    chooseInven: ['', Validators.required],
    topInven: ['', Validators.required],
    tipoInven: ['', Validators.required],
    varInven: ['', Validators.required],
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
    this.getQuerysPersonalizados();
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

  getQuerysPersonalizados(): void {
    this.inventariosService.getQuerysPersonalizados()
    .subscribe(maxprod => {
      this.qPerso = maxprod;
      this.qPerso.forEach(async prods => {
          console.log(prods.descripcion)
        await this.getResult(prods.descripcion)


      });
    });
  }
  
  async getResult(descripcion:String): Promise<void> {
    await this.inventariosService.getDataQuery(descripcion)
  }
  toggleSidebar() {
    $('#sidebar').toggleClass('active');
  }

  getLang() {
    let lang = $("html").attr("lang");
    return lang
  }

  qForm(){
    let chooseInven = this.formInfo.value.chooseInven
    let topInven = this.formInfo.value.topInven
    let tipoInven = this.formInfo.value.tipoInven
    let varInven = this.formInfo.value.varInven
    if (tipoInven){
      console.log('{$sort: {'+varInven+': -1}}, {$limit: '+topInven+'}')
      return '{$sort: {'+varInven+': -1}}, {$limit: '+topInven+'}'
    }
    else{
      console.log('{$sort: {'+varInven+': 1}}, {$limit: '+topInven+'}')
      return '{$sort: {'+varInven+': 1}}, {$limit: '+topInven+'}'
    }
  }



  enviar() {
    const nuevoReporte: Reporte = {
      _id: 'Nuevo!',
      name: String(this.formInfo.value.nameInven),
      creationDate: new Date(),
      descripcion: String(this.qForm()),
      lang: String(this.getLang()),
      uID: '10'
    };

    console.log(nuevoReporte)
    this.inventariosService.addReporte(nuevoReporte)
      .subscribe(reportes => this.inventariosService.inventarios.push(nuevoReporte));
    $('#newModal').modal('hide');
  }
}
