import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CadastroComponent } from '../demos/cadastro/cadastro.component';

@Injectable( )
export class CadastroGuard implements CanDeactivate<CadastroComponent>{
    canDeactivate(component : CadastroComponent){
        if(component.mudancasNaoSalvas){
            return window.confirm('Tem certeza que deseja sair?');
        }
        return true;
    }
}