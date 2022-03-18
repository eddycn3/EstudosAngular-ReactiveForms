import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';

const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent },
    {
        path: 'produtos', 
        loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
        .then(m=>m.ProdutoModule) 
    },
    // '**' Significa uma rota GERAL! 
    // Caso não encontre a rota declarada redirecione para o componente
    {path : '**',component : NotFoundComponent},

];

@NgModule({
    imports:
    [
        RouterModule.forRoot(rootRouterConfig, {enableTracing: true})
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}

