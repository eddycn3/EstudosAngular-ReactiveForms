import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styles: []
})
export class EditarProdutoComponent implements OnInit {
  produto : Produto;
  constructor(
    private routerActivated : ActivatedRoute, 
    private produtoService : ProdutoService,
    private router: Router) { }

  ngOnInit() {
    this.routerActivated.params
    .subscribe(params => {
      var id  = params['id'];
      if(id > 0)
        this.produto = this.produtoService.obterPorId(id);
    });
  }

  salvar(){
    this.router.navigate(['/produtos']);
  }

}
