export function deepClone<T extends object>(obj: T) {
  if (typeof obj !== 'object') {
    throw Error('not object type');
  }
  return JSON.parse(JSON.stringify(obj));
}
