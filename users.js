const users = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com"
  },
  {
    id: 2,
    name: "Sarah",
    email: "sarah@example.com"
  }
];

function getUser(id) {
  return users.find(user => user.id === id);
}
function createUser(name, email) {
  const user = {
    id: users.length + 1,
    name,
    email
  };

  users.push(user);

  return user;
}
module.exports = { users, getUser, createUser };
