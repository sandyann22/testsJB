const calcul = require('./datecompare');

var date1 = new Date(2000,1,1,0,0,0);
var date2 = new Date(2000,1,1,0,0,59);

test('soustracts date2 - date1 to equal tmp', () => {

    console.log(calcul.dateDiff(date1, date2));

    expect(calcul.dateDiff(date1, date2)).toBe(59);

  });