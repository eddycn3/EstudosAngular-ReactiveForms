import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, Observable } from 'rxjs';
import { Produto } from '../models/produto';
import { ProdutoCardComponent } from '../produto-card/produto-card.component';
import { ProdutoCountComponent } from '../produto-card/produto-count.component';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: []
})
export class ProdutoDashboardComponent implements OnInit,AfterViewInit {
  produtos: Produto[]

  /*
  1. NÃO UTILIZAR PARA ALTERAR O ESTADO DO ELEMENTOS
  2. UTILIZAR PARA INTERAGIR/OBSERVAR OS ELEMENTOS DO DOM 
  */
  @ViewChild(ProdutoCountComponent,{static : false}) contador : ProdutoCountComponent;

  @ViewChild('teste',{ static : false }) mensagemTela : ElementRef;

  @ViewChildren(ProdutoCardComponent) botoes : QueryList<ProdutoCardComponent>;

  constructor(private route : ActivatedRoute) {

   }

  ngAfterViewInit(): void {

    // observa o evento click deste elemnto html
    let clickTexto : Observable<any> = fromEvent(this.mensagemTela.nativeElement,'click');
    clickTexto.subscribe(()=>{
      alert('clicou');
      return;
    });

    //console.log(this.botoes);

    this.botoes.forEach(p => console.log(p.produto))
  }

  ngOnInit() {
    //  alimentado a partir de dados da rota
    this.produtos = this.route.snapshot.data['produtos'];

    // this.produtos = [{
    //   id: 1,
    //   nome: 'Teste',
    //   ativo: true,
    //   valor: 100,
    //   imagem: 'celular.jpg'
    // },
    // {
    //   id: 2,
    //   nome: 'Teste 2',
    //   ativo: true,
    //   valor: 200,
    //   imagem: 'gopro.jpg'
    // },
    // {
    //   id: 3,
    //   nome: 'Teste 3',
    //   ativo: true,
    //   valor: 300,
    //   imagem: 'laptop.jpg'
    // },
    // {
    //   id: 4,
    //   nome: 'Teste 4',
    //   ativo: true,
    //   valor: 400,
    //   imagem: 'mouse.jpg'
    // },
    // {
    //   id: 5,
    //   nome: 'Teste 5',
    //   ativo: true,
    //   valor: 500,
    //   imagem: 'teclado.jpg'
    // },
    // {
    //   id: 6,
    //   nome: 'Teste 6',
    //   ativo: false,
    //   valor: 600,
    //   imagem: 'headset.jpg'
    // }];
  }

  mudarStatus( event : Produto) {
    event.ativo = !event.ativo;
  }

}
