const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const registerRoutes = require("./routes/register");

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("running");
});

app.use("/api/register", registerRoutes);

app.listen(PORT, () => {
  console.log(`server running: ${PORT}`);
});
