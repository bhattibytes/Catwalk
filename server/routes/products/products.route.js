const express = require('express');
const router = express.Router();
const axios = require('axios');
const github_token = process.env.GIT_HUB_TOKEN;
const atelierUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

// Router for getting all products
router.get('/', async (req, res) => {
  try {
    const atelierResponse = await axios({
      method: 'GET',
      url: `${atelierUrl}/products`,
      headers: {
        Authorization: github_token
      }
    });
    res.status(200).json({ success: true, results: atelierResponse.data });
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, message: 'Failed getting products.' });
  }
});

// Router for getting all products styles
router.get('/:product_id/styles', async (req, res) => {
  const { product_id } = req.params;
  try {
    const atelierResponse = await axios({
      method: 'GET',
      url: `${atelierUrl}/products/${product_id}/styles`,
      headers: {
        Authorization: github_token
      }
    });
    res.status(200).json({ success: true, data: atelierResponse.data.results });
  } catch (err) {
    res.status(500).json({ success: false, message: `Failed getting styles for product id ${product_id}` });
  }
});

module.exports = router;