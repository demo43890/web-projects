const { users } = require("./users");

function getDashboard() {
  return {
    totalUsers: users.length,
activeUsers: users.length,
    users: users
  };
}

module.exports = { getDashboard };
