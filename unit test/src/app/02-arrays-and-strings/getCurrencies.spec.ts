import {getCurrencies} from './getCurrencies';

describe('getCurrencies',()=> {

  it('should return supported currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('USD');
  });

});
