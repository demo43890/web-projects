const settings = {
  theme: "dark",
  notifications: true,
  language: "en",
  compactMode: true
};
function updateSettings(changes) {
  return {
    ...settings,
    ...changes
  };
}

module.exports = { settings, updateSettings };
