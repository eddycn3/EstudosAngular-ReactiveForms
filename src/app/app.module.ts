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
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/imageformaterpipe.pipe';
import { Provider } from '@angular/compiler/src/core';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { TodoModule } from './demos/todo-list/todo.module';
import { BarServices } from './demos/bar-di-zones/bar.service';

registerLocaleData(localePt);

// Coleção de providers
// pode ser utilizado para organizar varios providers e exportalos na aplicação dependente do app module
export const BAR_ZONES_DI_PROVIDERS : Provider[] = [
  BarServices
];

@NgModule({
  
  declarations: [
    AppComponent,
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,
    ImageFormaterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TextMask.TextMaskModule,
    NgBrazil,
    CustomFormsModule,
    NavegacaoModule,
    AppRoutingModule,
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'e5etdr6d7rtd7eyr8deuh6'
    }),
    TodoModule
  ],
  providers: [
    AuthGuard,
    CadastroGuard,
    //BAR_ZONES_DI_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
