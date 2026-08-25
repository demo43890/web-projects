const { users } = require("./users");

function getDashboard() {
  return {
    totalUsers: users.length,
    users: users
  };
}

module.exports = { getDashboard };
