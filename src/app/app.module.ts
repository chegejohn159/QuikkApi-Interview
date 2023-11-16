import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { MonthlySpendingComponent } from './components/main/dashboard/charts/monthly-spending/monthly-spending.component';
import { SpendingPerCategoryComponent } from './components/main/dashboard/charts/spending-per-category/spending-per-category.component';
import {MatCardModule} from "@angular/material/card";
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './components/main/auth/login/login.component';
import {MatIconModule} from "@angular/material/icon";
import { HomeComponent } from './components/main/home/home.component';
import { MyAccountComponent } from './components/main/my-account/my-account.component';
import { RegisterComponent } from './components/main/auth/register/register.component';
import { LogoComponent } from './components/shared/logo/logo.component';
import { SecureRoutesComponent } from './components/main/secure-routes/secure-routes.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { TopUpComponent } from './components/main/my-account/modals/top-up/top-up.component';
import { SendMoneyComponent } from './components/main/my-account/modals/send-money/send-money.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveInputComponent} from "./components/shared/reactive-input/reactive-input.component";
import {ReactiveSelectComponent} from "./components/shared/reactive-select/reactive-select.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {SuccessSnackbarComponent} from "./components/shared/snackbar/success-snackbar/success-snackbar.component";
import {ErrorSnackbarComponent} from "./components/shared/snackbar/error-snackbar/error-snackbar.component";
import {HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MonthlySpendingComponent,
    SpendingPerCategoryComponent,
    LoginComponent,
    HomeComponent,
    MyAccountComponent,
    RegisterComponent,
    LogoComponent,
    SecureRoutesComponent,
    SideBarComponent,
    TopUpComponent,
    SendMoneyComponent,
    ReactiveInputComponent,
    ReactiveSelectComponent,
    SuccessSnackbarComponent,
    ErrorSnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgChartsModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatProgressBarModule,
    MatSnackBarModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
