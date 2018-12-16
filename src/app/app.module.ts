import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterial} from './angular.material';
import { HomeComponent } from './pages/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {WSService} from './servicios/ws.service';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterial,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    WSService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
