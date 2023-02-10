import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

app.use("/request-type", (req, res, next) => {
  console.log("Request type: ", req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("Successful response.");
});

app.listen(port, () =>
  console.log(`Example app is listening on port ${port}.`)
);
