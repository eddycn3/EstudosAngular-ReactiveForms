import { BehaviorSubject, Observable } from "rxjs";
import { Task} from "./task";

import { map } from 'rxjs/operators';


export interface State {
    todolist: Task[]
}

const state: State = {
    todolist : []
}

export class Store{
    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable();

    get value(){
        return this.subject.value;
    }

    public getTodoList(): Observable<Task[]>{
        return this.store
        .pipe(map(store => store.todolist));
    }

    set(name: string, state: any) {
        // next seta o valor e o operador ...(spreed) 
        // propaga o valor atraves do [nome] setado com o valor do novo estado
        this.subject.next({
            ...this.value, [name] : state
        })
    }
}