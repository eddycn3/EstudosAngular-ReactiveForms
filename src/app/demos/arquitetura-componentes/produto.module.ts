import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoRoutingModule } from "./produto.route";
import { ProdutoCardComponent } from "./produto-card/produto-card.component";

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProdutoCountComponent } from "./produto-card/produto-count.component";
registerLocaleData(localePt);


@NgModule({
    declarations:[ProdutoDashboardComponent,ProdutoCardComponent,ProdutoCountComponent],
    exports:[],
    imports:[CommonModule, ProdutoRoutingModule]
})
export class ProdutoModule{}