import { Component, Input, Output,EventEmitter } from "@angular/core";
import { Produto } from "../models/produto";

@Component({
    selector:'produto-card',
    templateUrl: './produto-card.component.html'

})
export class ProdutoCardComponent {
    
    @Input()
    produto: Produto;

    @Output()
    status : EventEmitter<any> = new EventEmitter()

    emitirEvento(){
        this.status.emit(this.produto);
    }

}