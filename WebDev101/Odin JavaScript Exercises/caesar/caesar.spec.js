const caesar = require('./caesar')

describe('caesar', function() {
  xit('works with single letters', function() {
    expect(caesar('A', 1)).toEqual('B');
  });
  xit('works with words', function() {
    expect(caesar('Aaa', 1)).toEqual('Bbb');
  });
  xit('works with phrases', function() {
    expect(caesar('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');
  });
  xit('works with negative shift', function() {
    expect(caesar('Mjqqt, Btwqi!', -5)).toEqual('Hello, World!');
  });
  xit('wraps', function() {
    expect(caesar('Z', 1)).toEqual('A');
  });
  xit('works with large shift factors', function() {
    expect(caesar('Hello, World!', 75)).toEqual('Ebiil, Tloia!');
  });
  it('works with large negative shift factors', function() {
    expect(caesar('Hello, World!', -29)).toEqual('Ebiil, Tloia!');
  });
});


// 3. Expected 'Mjq1qt, \twqi!' to equal 'Mjqqt, Btwqi!'. SHFTING 26 EXTRA

// 4. Expected 'Hello, =orld!' to equal 'Hello, World!'.  SHFTING 26 EXTRA

// 5. Expected '[' to equal 'A'.  NOT LOOPING

// 6. Expected '_|, n{!' to equal 'Ebiil, Tl  SHFTING 26 EXTRA

//----------------------------------------------------------------------------  

// 3. 'Mjqqt, BZ]WO!' to equal 'Mjqqt, Btwqi!'






