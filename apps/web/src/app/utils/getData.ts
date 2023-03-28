import memoize from 'lodash/memoize';

const getData = () =>
  new Promise((resolve) => {
    fetch('http://localhost:3333/api/news')
      .then((response) => response.json())
      .then((data) => resolve(data));
  });

export default memoize(getData);
