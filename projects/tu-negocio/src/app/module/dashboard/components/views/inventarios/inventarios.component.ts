import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

import { InventariosService } from '../../../services/inventarios.service';
import { Inventario } from '../../../../../models/inventario';

declare let $: any;
@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.component.html',
  styleUrls: ['./inventarios.component.scss']
})
export class InventariosComponent implements OnInit {
  formInventario = this.formBuild.group({
    nameInven: ['', Validators.required],
    descripcionInven: ['', Validators.required]
  });

  constructor(private formBuild: FormBuilder, public inventariosService: InventariosService) {}

  ngOnInit(): void {
    this.getInventarios();
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
      .subscribe(inventarios => (this.inventariosService.inventarios = inventarios));
    // this.inventariosService.currentInventario = this.inventarios[0];
  }
  

  enviar() {
    const nuevoInven: Inventario = {
      _id: 'Nuevo!',
      name: String(this.formInventario.value.nameInven),
      creationDate: new Date(),
      descripcion: String(this.formInventario.value.descripcionInven),
      lang: String(this.getLang()),
      uID: '10'
    };
    this.inventariosService.addInventario(nuevoInven)
      .subscribe(inventario => this.inventariosService.inventarios.push(nuevoInven));
    $('#newModal').modal('hide');
  }
}
