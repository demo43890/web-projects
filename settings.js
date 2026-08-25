const settings = {
  theme: "light",
  notifications: true,
  language: "en"
};

function updateSettings(changes) {
  return {
    ...settings,
    ...changes
  };
}

module.exports = { settings, updateSettings };
