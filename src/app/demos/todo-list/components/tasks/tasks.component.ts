import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { TasksService } from '../../todo.service';
import { Store } from '../../todo.store';

@Component({
  selector: 'tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit, OnDestroy {

  todolist$: Observable<any[]>
 
  
  constructor(private taskService: TasksService, private store: Store) {}


  ngOnInit() {  
    //this.todolist$ = this.taskService.getTodoList$;
    this.todolist$ = this.store.getTodoList()
    .pipe(
      map( todoList => todoList.filter(task => !task.iniciado && !task.finalizado))
    );

 
  }  

  ngOnDestroy(): void {
    //this.subscription.unsubscribe();
  }

  onToggle(event){
    this.taskService.toggle(event);
  }
}