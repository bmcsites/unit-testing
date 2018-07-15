import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  var component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('when using upVote() the event should be emited', () => {
    let totalVotes = null;
    /* subscribe to the new emitter like in the component */
    component.voteChanged.subscribe(totalV => totalVotes = totalV);
    /* call the function like in the component */
    component.upVote();

    expect(totalVotes).not.toBeUndefined();
    expect(totalVotes).toBe(1);
  });


});
