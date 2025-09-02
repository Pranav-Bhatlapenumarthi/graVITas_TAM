const express = require("express");
const { supabase } = require("../lib/supabaseClient.js");
const router = express.Router();

function generateTeamID() {
	return Math.floor(1000 + Math.random() * 9000).toString();
}

// change this back to post
router.get("/check", async (req, res) => {
	// const { name, regNo, email, phone } = req.body;
	const name = "Jackson West";
	const regNo = "18LAPD33356";
	const email = "iwantobecomepoliceman@lapd.com";
	const phone = "7980455545";
	
	const { data, error } = await supabase
		.from('users')
		.insert({
			name: name,
			reg_no: regNo,
			email: email,
			phone: phone
		})

	if (error) {
		console.log(error);
		return error;
	} else {
		console.log(data);
	}
	res.json({ message: "ghapla happened successfully" });
});

router.post("/member", (req, res) => {
	//   const { name, regNo, email, phone, teamID, teamName } = req.body;

	res.json({ message: "Member added successfully" });
});

router.get("/teams", (req, res) => {
	const teams = "holo bhai?";
	res.json(teams);
});

module.exports = router;