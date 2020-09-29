import * as assert from 'assert';

describe('test/pages/api/index.test.ts', function() {
  it('test', () => {
    assert({ a: 1 }.a === { a: 2, b: 1 }.b);
  });
});
