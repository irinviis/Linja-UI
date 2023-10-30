import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeFi from '@angular/common/locales/fi';
registerLocaleData(localeFi, 'fi');
import { defineLocale } from 'ngx-bootstrap/chronos';
import { fiLocale } from 'ngx-bootstrap/locale';
defineLocale('fi', fiLocale);


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NavComponent } from './nav/nav.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { BusComponent } from './bus/bus.component';
import { DrivingPlanComponent } from './driving-plan/driving-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MaintenanceComponent,
    BusComponent,
    DrivingPlanComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID,
      useValue: 'fi-FI'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
