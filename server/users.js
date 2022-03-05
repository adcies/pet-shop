const users = [
  {
    id: 1,
    login: 'user1',
    isAdmin: false,
    purchasedProducts: [],
    wallet: 0,
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
