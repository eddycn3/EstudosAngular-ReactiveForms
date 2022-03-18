import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { SobreComponent } from './institucional/sobre/sobre.component';
import { AppRoutingModule } from './app.routes';
import { CadastroComponent } from './demos/cadastro/cadastro.component';

import {TextMask ,NgBrazil } from 'ng-brazil';
import { CustomFormsModule } from 'ng2-validation';
import { NavegacaoModule } from './navegacao/navegacao.module';



@NgModule({
  
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMask.TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    NavegacaoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
