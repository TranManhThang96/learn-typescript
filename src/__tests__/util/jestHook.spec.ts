describe('jest Hook', () => {
  beforeAll(() => {
    console.log('before all');
  });

  afterAll(() => {
    console.log('after all');
  });

  beforeEach(() => {
    console.log('before each');
  });

  afterEach(() => {
    console.log('after each');
  });

  test('case1', () => {
    expect(1).toBe(1);
  });

  test.skip('case2', () => {
    expect(2).toBe(1);
  });
});
