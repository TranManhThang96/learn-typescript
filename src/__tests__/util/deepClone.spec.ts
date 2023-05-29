import { deepClone } from '../../util/deepClone';

describe('check function deepClone', () => {
  test('check 1', () => {
    const obj1 = {
      a: 1,
      b: 2,
    };
    expect(deepClone(obj1)).not.toBe(obj1);
  });

  test('check 2', () => {
    const obj1 = {
      name: 'thang',
      info: {
        age: 29,
        weight: 80,
      },
    };
    expect(deepClone(obj1)).not.toBe(obj1);
  });

  test('check 3', () => {
    expect(() => {
      deepClone('abc' as any);
    }).toThrow('');
  });

  test('check 4', () => {
    expect(() => {
      deepClone('abc' as any);
    }).toThrowError('not object type');
  });

  test.skip('check 5', () => {
    expect(() => {
      deepClone('abc' as any);
    }).toThrowError('not object type!');
  });

  test('check 6', () => {
    try {
      deepClone('abc' as any);
    } catch (err) {
      expect(err).toBeInstanceOf(Error);
      expect(err).toHaveProperty('message', 'not object type');
    }
  });
});
