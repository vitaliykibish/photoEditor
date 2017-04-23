const fakeData = [
  {
    id: '001',
    src: 'http://lorempixel.com/400/200',
    tooltip: 'tooltip',
    color: 'red',
  },
  {
    id: '002',
    src: 'http://lorempixel.com/400/200',
    tooltip: 'tooltip',
    color: 'green',
  },
  {
    id: '003',
    src: 'http://lorempixel.com/400/200',
    tooltip: 'tooltip',
  },
  {
    id: '004',
    src: 'http://lorempixel.com/400/200',
    tooltip: 'tooltip',
    color: 'red',
  },
];

const fetchFakeData = () => {
  return new Promise((res, rej) => {
    setTimeout(_ => res(fakeData), 500);
  });
};

export default fetchFakeData;
