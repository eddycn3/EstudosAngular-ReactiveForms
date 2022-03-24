import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks-iniciadas',
  templateUrl: './tasks-iniciadas.component.html'
})
export class TasksIniciadasComponent implements OnInit,OnDestroy {

  iniciados$: Observable<any[]>;
  subscription : Subscription;
  constructor(private tasksService: TasksService, private store: Store) {}

  ngOnInit() {
    //this.iniciados$ = this.tasksService.getTodoList$    
    this.iniciados$ = this.store.getTodoList()
    .pipe(
      map(todolist => todolist.filter(task => task.iniciado && !task.finalizado))
    );  
    this.subscription = this.tasksService.getTodoList$.subscribe();
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onToggle(event){
    this.tasksService.toggle(event);
  }

}