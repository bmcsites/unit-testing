import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  let items: any;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
    items = [
      {id: 1, title: 'a'},
      {id: 2, title: 'b'},
      {id: 3, title: 'c'}
    ]
  });

  it('should set todos property with items that come from the server', () => {

    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.of(items);
    });
    component.ngOnInit();
    // checking if the type that return from the service is an object
    expect(typeof component.todos).toBe('object');
  });


  it(' is the server was called when add() is called ?', () => {
    // Arrange phase
    let spy = spyOn(service,'add').and.callFake(t => {
      return Observable.empty();
    });

    // Act phase
    component.add();

    // Assert(check)
    expect(spy).toHaveBeenCalled();
  });



  it('is server data return valid when add() is called ?', () => {

    // Arrange phase
    let data = {id:1};
    spyOn(service,'add').and.callFake(t => {
      return Observable.of(data);
    });

    // Act phase
    component.add();

    // Assert(check) if data that in the component is equal to what retrend from the server.
    expect(component.todos.indexOf(data)).toBeGreaterThan(-1);
  });

  it('after calling the add() check if error is sent.', () => {

    // Arrange phase
    let data = {id:1};
    let myerror = 'this is an error';
    spyOn(service,'add').and.returnValue(Observable.throwError(myerror));

    // Act phase
    component.add();

    // Assert(check) if data that in the component is equal to what retrend from the server.
    expect(component.message).toBe(myerror);
  });


  it('call the server to delete todo if the user confirm', () => {

    // Arrange phase
    spyOn(window,'confirm').and.returnValue(true);
    let spy = spyOn(service,'delete').and.returnValue(Observable.empty());

    // Act phase
    component.delete(1);

    // Assert(check)
    expect(spy).toHaveBeenCalledWith(1);
  });


  it('DO NOT call the server to delete todo if the user cancel', () => {

    // Arrange phase
    spyOn(window,'confirm').and.returnValue(false);
    let spy = spyOn(service,'delete').and.returnValue(Observable.empty());

    // Act phase
    component.delete(1);

    // Assert(check) if data that in the component is equal to what retrend from the server.
    expect(spy).not.toHaveBeenCalledWith(1);
  });

});
