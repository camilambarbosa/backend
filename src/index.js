const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

app.listen(3334, () => {
  console.log("Back-end startedadsaerew!");
});
