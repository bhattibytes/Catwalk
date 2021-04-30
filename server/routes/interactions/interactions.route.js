const express = require('express');
const router = express.Router();
const axios = require('axios');
const github_token = process.env.GIT_HUB_TOKEN;
const atelierUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

// Router for posting interactions with application
router.post('/', async (req, res) => {
  try {
    const atelierResponse = await axios({
      method: 'POST',
      url: `${atelierUrl}/interactions`,
      headers: {
        Authorization: github_token
      },
      data: req.body
    });
    res.status(201).json({ success: true, message: 'Saved interaction successfully.' });
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, message: `Failed saving interaction.` });
  }
});

module.exports = router;