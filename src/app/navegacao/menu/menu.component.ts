import { Component } from '@angular/core';
import { MenuModel } from './models/menu-model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  menus : MenuModel [] = [
    {
      link : '/home',
      name : 'Home',
      exact : true,
      admin : true
    },
    {
      link : '/sobre',
      name : 'Sobre',
      exact : true,
      admin : true
    },
    {
      link : '/cadastro',
      name : 'Cadastro',
      exact : true,
      admin : true
    },
    {
      link : '/produtos',
      name : 'Produtos',
      exact : false,
      admin : true
    },
    {
      link : '/filmes',
      name : 'Filmes',
      exact : false,
      admin : true
    },
    {
      link : '/todo',
      name : 'ToDo',
      exact : false,
      admin : true
    },
    {
      link : '/admin',
      name : 'Admin',
      exact : false,
      admin : true
    }
  ];
}
