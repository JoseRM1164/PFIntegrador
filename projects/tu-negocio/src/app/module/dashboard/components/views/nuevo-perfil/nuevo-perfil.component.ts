// Deprecated: No nuevo perfil call to api
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

import { PerfilesService } from '../../../services/perfiles.service';
import { Perfil } from '../../../../../models/perfil';

declare let $: any;
@Component({
  selector: 'app-nuevo-perfil',
  templateUrl: './nuevo-perfil.component.html',
  styleUrls: ['./nuevo-perfil.component.scss']
})
export class NuevoPerfilComponent implements OnInit {
  modeloPerfil = this.formBuild.group({
    nombrePerfil: ['', Validators.required],
    apellidosPerfil: ['', [Validators.required]],
    correoPerfil: ['', [Validators.required, Validators.email]],
    passwordPerfil: ['', [Validators.required, Validators.minLength(8)]],
    telefonoPerfil: [''],
    adminCheck: [''],
    lecturaCheck: [''],
    escrituraCheck: [''],
    borradoCheck: ['']
  });


  constructor(
    private formBuild: FormBuilder,
    private perfilesService: PerfilesService, 
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    $('#sidebar').toggleClass('active');
  }

  enviar() {
    const nuevoPerfil: Perfil = {
      id: 4,
      nombre: String(this.modeloPerfil.value.nombrePerfil),
      apellidos: String(this.modeloPerfil.value.apellidosPerfil),
      correo: String(this.modeloPerfil.value.correoPerfil),
      password: String(this.modeloPerfil.value.passwordPerfil),
      telefono: String(this.modeloPerfil.value.telefonoPerfil),
      admin: String(this.modeloPerfil.value.adminCheck),
      lectura: String(this.modeloPerfil.value.lecturaCheck),
      escritura: String(this.modeloPerfil.value.escrituraCheck),
      borrado: String(this.modeloPerfil.value.borradoCheck)
    };
    this.perfilesService.addPerfil(nuevoPerfil);
    this.router.navigateByUrl('/dashboard/perfil');
  }
}

