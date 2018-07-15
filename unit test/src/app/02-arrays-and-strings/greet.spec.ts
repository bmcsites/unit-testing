import {greet} from './greet';

describe('greet',()=> {

  it('should return a message and the name that was given', () => {
    expect(greet('Cfir')).toContain('Cfir');
  });

});

