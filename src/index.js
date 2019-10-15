const app = require("./app");

//IFEE START

(async function main() {
  await app.listen(app.get("port"));
  console.log(`Server on Port ${app.get("port")}`);
})();
