const app = require("./src/app.js");

const PORT = 4444;

app.listen(PORT, () => {
  console.log("SERVER ON PORT: ", PORT);
});
