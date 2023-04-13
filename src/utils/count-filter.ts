import isEqual from 'lodash/isEqual';
import reduce from 'lodash/reduce';

const diff = (a: any, b: any) => {
  const d = reduce(
    a,
    (result, value, key) => {
      return !b[key] || isEqual(value, b[key]) ? result : result.concat(key);
    },
    [] as string[],
  );

  return d.length;
};

export default diff;
