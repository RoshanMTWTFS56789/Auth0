import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}

  login(): any {
    this.auth.loginWithRedirect();
  }
}
