import { Component } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import { faBell, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { BtnComponent } from '../btn/btn.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule, FontAwesomeModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  faInfoCircle = faInfoCircle
  faBell = faBell
  isOpen = false
  isOpenBody = false
}
