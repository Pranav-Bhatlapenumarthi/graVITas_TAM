const express = require("express");
const { supabase } = require("../lib/supabaseClient.js");
const router = express.Router();

function generateRandomString() {
  return Math.random().toString(36).substring(2, 8);
}

console.log(generateRandomString());

router.post("/member", async (req, res) => {
	const { name, regNo, email, phone, teamcode, leader } = req.body;
	
	const { data, error } = await supabase
		.from('users')
		.insert({
			name: name,
			reg_no: regNo,
			email: email,
			phone: phone,
			teamcode: teamcode,
			leader: leader
		})

	if (error) {
		console.log(error);
		return error;
	} else {
		res.json({
			name: name,
			reg_no: regNo
		});
	}
});

router.post("/team", async (req, res) => {
	const { name, event } = req.body;
	const rnTeamCode = generateRandomString();

	const { data, error } = await supabase
		.from('teams')
		.insert({
			team_name: name,
			team_id_code: rnTeamCode,
			event_name: event
		})

	if (error) {
		console.log(error);
		return error;
	} else {
		res.json({ teamcode: rnTeamCode });
	}
});

// router.post("/updateLeader", async (req, res) => {
// 	const { teamcode, regNo } = req.body;
	
// 	const { data, error } = await supabase
// 		.from("teams")
// 		.update({ leader_reg_no: regNo })
// 		.eq("team_id_code", teamcode)
// 		.select("*")
// 		;

// 	if (error) {
// 		console.log(error);
// 		return error;
// 	} else {
// 		res.json({ 
// 			teamcode: teamcode,
// 			leader: regNo
// 		});
// 		console.log('ghapla');
// 		console.log(data);
// 	}
// });

router.post("/updateLeader", async (req, res) => {
	const { teamcode, regNo } = req.body;

	const { data, error } = await supabase
		.from('users')
		.select('*')
		.eq('teamcode', teamcode)
		.eq('reg_no', regNo)
		;

	if (error || data.length==0) {
		console.log(error);
		return error;
	} else {
		console.log(data[0]);
		const { fdata, ferror } = await supabase
			.from("teams")
			.update({ leader_reg_no: data[0].user_id })
			.eq("team_id_code", teamcode)
			.select("*")
			;

		if (ferror) {
			console.log(ferror);
			return ferror;
		} else {
			res.json({ 
				teamcode: teamcode,
				leader: regNo
			});
			console.log('ghapla');
			console.log(fdata);
		}

		console.log('ghapla');
		console.log(data);
	}
});

module.exports = router;