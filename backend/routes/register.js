const express = require("express");
const router = express.Router();

function generateTeamID() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

router.post("/leader", (req, res) => {
//   const { name, regNo, email, phone, teamName, numMembers } = req.body;

  res.json({ message: "Team created successfully" });
});

router.post("/member", (req, res) => {
//   const { name, regNo, email, phone, teamID, teamName } = req.body;

  res.json({ message: "Member added successfully" });
});

router.get("/teams", (req, res) => {
  res.json(teams);
});

module.exports = router;