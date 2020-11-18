import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-provider',
  templateUrl: './login-provider.component.html',
  styleUrls: ['./login-provider.component.scss']
})
export class LoginProviderComponent implements OnInit {
  @Input() provider;

  constructor() { }

  ngOnInit(): void {
  }

}
