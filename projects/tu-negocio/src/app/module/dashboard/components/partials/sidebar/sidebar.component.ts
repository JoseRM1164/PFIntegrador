import { Component, Inject, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

import {
  animation,
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
  state
} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('childAnimation', [
      state(
        'open',
        style({
          backgroundColor: '#006B38FF'
        })
      ),
      state(
        'close',
        style({
          backgroundColor: '#57A0D3'
        })
      ),
      transition('* => *', [animate('2s')])
    ]),
  ]
})
export class SidebarComponent implements OnInit {

  animated =  false;

  constructor(@Inject(DOCUMENT) private doc: Document, public auth: AuthService) {}

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

  ngOnInit(): void {
  }

  toggleAnim() {
    console.log('Toggle anim');
    this.animated = !this.animated;
  }

}
