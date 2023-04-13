import isEqual from 'lodash/isEqual';
import reduce from 'lodash/reduce';

export const isEmptyObject = (obj: any) => {
  for (const key in obj) {
    // eslint-disable-line
    return false;
  }
  return true;
};

export const isPlainObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

// About 1.5x faster than the two-arg version of Array#splice().
export const spliceOne = (list: any, index: number) => {
  for (let i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k]; // eslint-disable-line
  }
  list.pop();
};

export const applyURIFilter = (filter: any, name = 'filter') => {
  const flag = isPlainObject(filter) && !isEmptyObject(filter);
  return flag ? `?${name}=${encodeURI(JSON.stringify(filter))}` : '';
};

export const countFilter = (a: any, b: any) => {
  const d = reduce(
    a,
    (result, value, key: any) => {
      return !b[key] || isEqual(value, b[key]) ? result : result.concat(key);
    },
    [],
  );

  return d.length;
};
