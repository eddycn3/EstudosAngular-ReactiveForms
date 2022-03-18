import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.route";
import { ProdutoCardComponent } from "./produto-card/produto-card.component";

import { registerLocaleData } from '@angular/common';
import { ProdutoCountComponent } from "./produto-card/produto-count.component";
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';

import localePt from '@angular/common/locales/pt';
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutoService } from "./services/produto.service";
import { ProdutoResolve } from "./services/produto.resolve";
registerLocaleData(localePt);


@NgModule({
    declarations:[
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoCardComponent,
        ProdutoCountComponent, 
        EditarProdutoComponent,
        ],
    exports:[],
    imports:[CommonModule, ProdutoRoutingModule],
    providers:[ProdutoService,ProdutoResolve]
})
export class ProdutoModule{}