import { TestBed, ComponentFixture} from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {

  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });

    // create a fixture that contains access to view and controller of component
    fixture = TestBed.createComponent(VoterComponent);
    // get the component instance from the fixture we build
    component = fixture.componentInstance;
    // other options :
    // "fixture.nativeElement" that give you access to the view
    // "fixture.debugElement" that give you some access to dom elements



  });

  // ----------detection uni test in view ---------------------
  it('should render total votes', () => {
    component.othersVote = 20;
    component.myVote = 1;

    // after you chenge paramters you need to inform angular to detect them
    fixture.detectChanges();

    // get the element of the vote-count by using the debugElement
    let de = fixture.debugElement.query(By.css('.vote-count'));
    // get the innerHTML properties
    let myElement: HTMLElement =  de.nativeElement;

    expect(myElement.innerText).toBe('21');
  });

  it('should highlight the upvote button if i have upvoted', () => {

    component.myVote = 1;
    fixture.detectChanges();
    // get the element of the vote-count by using the debugElement
    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));

    expect(de.classes['highlighted']).toBeTruthy();
  });


  // -----------------detection on bind in view ----------------------------

  it('should increase total votes when clicked', () => {

    // get the element of the vote-count by using the debugElement
    let button = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    // trigger the click
    button.triggerEventHandler('click',null);

    expect(component.totalVotes).toBe(1);
  });

});
