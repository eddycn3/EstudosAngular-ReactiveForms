import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";

const produtoRtouterConfig: Routes = [
    {
        path: '', component: ProdutoDashboardComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(produtoRtouterConfig)],
    exports:[RouterModule]
})
export class ProdutoRoutingModule{

}