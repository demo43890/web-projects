const { getUser } = require("./users");

function getUserProfile(id) {
  const user = getUser(id);

  if (!user) {
    return {
      error: "User not found"
    };
  }

  return {
  id: user.id,
  name: user.name,
  email: user.email,
  profileUrl: `/users/${user.id}`
};
}

module.exports = { getUserProfile };
