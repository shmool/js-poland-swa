import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginProviderComponent } from './login-provider/login-provider.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    LoginComponent,
    LoginProviderComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ]
})
export class AuthModule { }
