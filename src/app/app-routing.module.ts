import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/main/dashboard/dashboard.component";
import {LoginComponent} from "./components/main/auth/login/login.component";
import {HomeComponent} from "./components/main/home/home.component";
import {MyAccountComponent} from "./components/main/my-account/my-account.component";
import {RegisterComponent} from "./components/main/auth/register/register.component";
import {SecureRoutesComponent} from "./components/main/secure-routes/secure-routes.component";

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'secure', component: SecureRoutesComponent,
    children:[
      {path: 'my-account', component: MyAccountComponent},
      {path: 'dashboard', component: DashboardComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
