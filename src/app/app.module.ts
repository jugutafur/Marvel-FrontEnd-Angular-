import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ShareModule } from './share/share.module';
import { RegisterModule } from './core/components/register/register.module'
import { AccessModule } from './core/components/access/access.module'

import { AppComponent } from './app.component';
import { PrincipalComponent } from './layout/principal/principal.component';
import { CuentaComponent } from './core/components/cuenta/cuenta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    HttpClientModule,
    ReactiveFormsModule,
    AccessModule,
    RegisterModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
