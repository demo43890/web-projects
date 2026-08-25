const { getDashboard } = require("./dashboard");

function testDashboard() {
  const dashboard = getDashboard();

if (dashboard.totalUsers !== 2 || dashboard.activeUsers !== 2) {  throw new Error("User count is incorrect");
  }

  console.log("Dashboard test passed");
}

testDashboard();
