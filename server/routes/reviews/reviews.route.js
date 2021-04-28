const express = require('express');
const router = express.Router();
const axios = require('axios');
const github_token = process.env.GIT_HUB_TOKEN;
const atelierUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp';

// Router for getting all reviews for particular product
router.get('/', async (req, res) => {
  const { product_id, page, count, sort } = req.query;

  try {
    const atelierResponse = await axios({
      method: 'GET',
      url: `${atelierUrl}/reviews/?product_id=${product_id}&page=${page}&sort=${sort}&count=${count}`,
      headers: {
        Authorization: github_token
      }
    });
    res.status(200).json({ success: true, results: atelierResponse.data.results });
  } catch (err) {
    res.status(500).json({ success: false, message: `Failed getting reviews for product id ${product_id}` });
  }
});

// Router for getting all meta-data reviews for particular product
router.get('/meta/', async (req, res) => {
  const { product_id } = req.query;
  try {
    const atelierResponse = await axios({
      method: 'GET',
      url: `${atelierUrl}/reviews/meta/?product_id=${product_id}`,
      headers: {
        Authorization: github_token
      }
    });
    res.status(200).json({ success: true, meta: atelierResponse.data });
  } catch (err) {
    res.status(500).json({ success: false, message: `Failed getting meta-data for product id ${product_id}` });
  }
});

// Add a review
router.post('/', async (req, res) => {
  const newReivew = req.body;
  try {
    const data = await axios({
      method: 'POST',
      url: `${atelierUrl}/reviews`,
      headers: {
        Authorization: github_token
      },
      data: newReivew
    });
    res.status(201).json({ success: true, message: 'Successfully added review.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed adding a review.' });
  }
});

// Mark a review as helpful
router.put('/:review_id/helpful', async (req, res) => {
  const { review_id } = req.params;
  try {
    const data = await axios({
      method: 'PUT',
      url: `${atelierUrl}/reviews/${review_id}/helpful`,
      headers: {
        Authorization: github_token
      }
    });
    res.status(204).json({ success: true, message: 'Successfully marked review helpful.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed marking a review helpful .' });
  }
});

// Report a review
router.put('/:review_id/report', async (req, res) => {
  const { review_id } = req.params;
  try {
    const data = await axios({
      method: 'PUT',
      url: `${atelierUrl}/reviews/${review_id}/report`,
      headers: {
        Authorization: github_token
      }
    });
    res.status(204).json({ success: true, message: 'Successfully reported review.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed reporting a review.' });
  }
});

module.exports = router;