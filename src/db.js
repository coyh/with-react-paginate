var faker = require('faker');

module.exports = () => {
  const data = { users: [] };

  for (let index = 1; index <= 1258; index++) {
    data.users.push({ id: index, name: `${faker.name.findName()} ${index}` });
  }

  return data;
};
