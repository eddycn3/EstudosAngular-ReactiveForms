import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { TodoComponent } from './demos/todo-list/todo.component';


const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent},
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent,canDeactivate:[CadastroGuard] },
    { path: 'todo', component: TodoComponent},
    {
        path: 'produtos', 
        loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
        .then(m=>m.ProdutoModule) 
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module')
        .then(m => m.AdminModule),
        canLoad : [AuthGuard],
        canActivate :[AuthGuard]
    },
    {path:'filmes',component: FilmesComponent},
    // '**' Significa uma rota GERAL! 
    // Caso não encontre a rota declarada redirecione para o componente
    {path : '**',component : NotFoundComponent},

];

@NgModule({
    imports:
    [
        // {enableTracing: true}
        RouterModule.forRoot(rootRouterConfig)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{}

