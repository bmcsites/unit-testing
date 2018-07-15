/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {TodoService} from './todo.service';
import { HttpModule } from '@angular/http'
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';

import { TodosComponent } from './todos.component';

/*import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';*/


describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ TodosComponent ],
      providers: [TodoService]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should call server when getTodos called', () => {

    let service = TestBed.get(TodoService);
    let data = [1,2,3];

    spyOn(service,'getTodos').and.returnValue(Observable.of(data));

    fixture.detectChanges();

    expect(component.todos).toBe(data);
  });
});
