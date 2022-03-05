const users = [
  {
    id: 1,
    login: 'user1',
    isAdmin: false,
    wallet: 0,
    purchasedProducts: [
      {
        name: 'Dog Food',
        category: 'dog-food',
        description: 'Salmon flavor - 5kg',
        img: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/salmon-1238248_960_720.jpg',
        id: 1,
        amount: 1,
      },
      {
        name: 'Cat Food',
        category: 'cat-food',
        description: 'Venison flavor - 5kg',
        img: 'https://cdn.pixabay.com/photo/2021/09/08/19/51/game-meat-6607794_960_720.jpg',
        id: 2,
        amount: 7,
      },
      {
        name: 'Frisbee',
        category: 'toys',
        description: 'Frisbee for dogs - blue color',
        img: 'https://cdn.pixabay.com/photo/2017/02/03/17/43/dachshund-2035700_960_720.jpg',
        id: 3,
        amount: 4,
      },
    ],
  },
  {
    id: 2,
    login: 'admin1',
    isAdmin: true,
    purchasedProducts: [],
    wallet: 0,
  },
];

const getUsers = () => users;

module.exports = getUsers;
