const users = [
  {
    id: 1,
    name: "John",
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

module.exports = { users, getUser };
