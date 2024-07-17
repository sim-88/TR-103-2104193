const express = require('express');
const router = express.Router();

const URL=require('../models/url.models');

router.get('/', async (req, res) => {
  const allURLS= await URL.find({})
    return res.render('home',{
      urls:allURLS,
    });
  })
module.exports = router;