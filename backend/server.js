const express = require("express");
const cors = require("cors");
const registerRoutes = require("./routes/register");

const PORT = 5000;
const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("running");
});

app.use("/api/register", registerRoutes);

app.listen(PORT, () => {
  console.log(`server running: ${PORT}`);
});
