import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-details', component: UserDetailsComponent },
  { path: '', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
