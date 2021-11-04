// Deprected: No perfil call to api
import { Component, OnInit } from '@angular/core';

import { PerfilesService } from '../../../services/perfiles.service';
import { Perfil } from '../../../../../models/perfil';

declare let $: any;
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  perfiles: Perfil[];

  constructor(private perfilesService: PerfilesService) {
    this.perfiles = [];
  }

  ngOnInit(): void {
    this.getPerfiles();
  }

  toggleSidebar() {
    $('#sidebar').toggleClass('active');
  }

  getPerfiles(): void {
    this.perfilesService.getPerfiles()
      .subscribe(perfiles => this.perfiles = perfiles);
  }

}
