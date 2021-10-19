const express = require("express");

const app = express();
const PORT = 3000;

const randomObjects = [];

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/objects", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(randomObjects));
});

app.post("/objects", (req, res) => {
  res.setHeader("Content-Type", "application/json");

  req.on("data", (chunk) => {
    randomObjects.push(JSON.parse(chunk));

    res.send(JSON.stringify({ message: "Object added successfuly" }));
  });
});

// Go to http://localhost:{PORT}/index.html
app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}\n`);
});
