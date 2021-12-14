const users = [
  {
    id: 1,
    login: 'user1',
    isAdmin: false,
  },
  {
    id: 2,
    login: 'admin1',
    isAdmin: true,
  },
];

const getUsers = () => users;

module.exports = getUsers;
