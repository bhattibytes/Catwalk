const express = require('express');
const router = express.Router();
const axios = require('axios');
const github_token = process.env.GIT_HUB_TOKEN;
const atelierUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

router.get('/:product_id', async (req, res) => {
  const { product_id } = req.params;
  try {
    const atelierData = await axios({
      method: 'GET',
      url: `${atelierUrl}/products/${product_id}/related`,
      headers: {
        Authorization: github_token
      }
    });
    res.status(200).json({ success: true, data: atelierData.data });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed getting related product.' });
  }
});


module.exports = router;