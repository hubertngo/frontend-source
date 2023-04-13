import * as queryString from 'query-string';

const buildUrl = (query: any = {}, url = '') => {
  const q = Object.keys(query).reduce((preVal, key) => {
    if (query[key] === '') {
      return preVal;
    }
    return {
      ...preVal,
      [key]: query[key],
    };
  }, {});

  const link = queryString.stringifyUrl({ url, query: q });

  return link;
};
export default buildUrl;
