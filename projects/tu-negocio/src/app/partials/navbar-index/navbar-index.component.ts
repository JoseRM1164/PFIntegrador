import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

declare let $: any;
@Component({
  selector: 'app-navbar-index',
  templateUrl: './navbar-index.component.html',
  styleUrls: ['./navbar-index.component.scss']
})
export class NavbarIndexComponent implements OnInit {

  constructor(private router: Router, public translate: TranslateService, @Inject(DOCUMENT) private doc: Document, public auth: AuthService) { 
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'es'); 
  }

  ngOnInit(): void {
    $("html").attr("lang", this.translate.getBrowserLang() ); 
  }

  login(): void {
    this.auth.loginWithRedirect();
  }

  signup(): void {
    this.auth.loginWithRedirect({screen_hint: 'signup' });
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

  switchLang(lang: string) {
    this.translate.use(lang);
    $("html").attr("lang", lang);
  }

}
