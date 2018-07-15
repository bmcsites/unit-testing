/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsComponent } from './user-details.component';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/empty';

/*import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';*/

class RouterStub {
  navigate(params){
  }
}

class ActivatedRouterStub {
  params:Observable<any> = Observable.empty();
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useClass: ActivatedRouterStub }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should change route on login', () => {
    /* get the Router from the testBed */
    let router = TestBed.get(Router);
    /*point to the router.navigate */
    let spy = spyOn(router,'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });


});
