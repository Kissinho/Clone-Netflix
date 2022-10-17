import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PerfisComponent } from './perfis/perfis.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "perfis", component: PerfisComponent
  },
  {
    path: "principal", component: PrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
