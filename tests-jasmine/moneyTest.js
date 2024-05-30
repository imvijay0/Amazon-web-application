import formatCurrency from '../scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
  it('converts cents in to dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('using zero', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  })
  
});
