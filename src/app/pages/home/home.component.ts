import { Component } from '@angular/core';
import { ArrowRightComponent } from '../../icons/arrow-right/arrow-right.component';
import { Router } from '@angular/router';
import { LogoComponent } from '../../icons/logo/logo.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ArrowRightComponent,
    LogoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router) {

  }

  openChat() {
    this.router.navigate(["chat"]);
  }
}
