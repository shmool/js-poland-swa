import { Component, OnInit } from '@angular/core';
import { providers } from '../auth-providers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  providers = providers;

  constructor() {
  }

  ngOnInit(): void {
  }

}
