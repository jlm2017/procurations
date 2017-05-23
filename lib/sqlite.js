const sqlite = require('sqlite');

(async () => {
  try {
    await sqlite.open('./database/database.sqlite');
    await sqlite.migrate();
  } catch (e) {
    console.log(e.stack);
    process.exit(1);
  }
})();

module.exports = sqlite;