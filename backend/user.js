const bcrypt = require('bcryptjs');

let users = [
  {
    id: 1,
    username: 'chikita',
    password: bcrypt.hashSync('123456', 10)
  }
];

module.exports = {
  getAll: () => users,
  findByUsername: (username) => users.find(u => u.username === username),
  addUser: (username, passwordHash) => {
    const newUser = {
      id: users.length + 1,
      username,
      password: passwordHash
    };
    users.push(newUser);
    return newUser;
  }
};
