import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogindetailsService } from './logindetails.service';
import { HttpClientModule } from '@angular/common/http';
import { AsiaComponent } from './asia/asia.component';
import { AllComponent } from './all/all.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AsiaComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    HttpClientModule
  ],
  providers: [LogindetailsService ,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
