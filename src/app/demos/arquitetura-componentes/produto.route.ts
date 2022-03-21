import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarProdutoComponent } from "./editar-produto/editar-produto.component";
import { ProdutoDashboardComponent } from "./produto-dashboard/produto-dashboard.component";
import { ProdutoAppComponent } from "./produto.app.component";
import { ProdutoResolve } from "./services/produto.resolve";

const produtoRtouterConfig: Routes = [
    {
        path: '', component: ProdutoAppComponent, 
        children: [
            { path : '', redirectTo:'todos'},
            {
                path: ':estado',
                component: ProdutoDashboardComponent,
                resolve:{
                    produtos : ProdutoResolve
                },
                // utilizado para recuperar dados custom que podem serobtidos a partir da rota
                // this.route.data['teste']
                data:{
                    teste: 'OlÁAAAAAA TESTE!'
                }
            },
            { path: 'editar/:id', component: EditarProdutoComponent }
        ]
    },
   
];

@NgModule({
    imports:[RouterModule.forChild(produtoRtouterConfig)],
    exports:[RouterModule]
})
export class ProdutoRoutingModule{

}