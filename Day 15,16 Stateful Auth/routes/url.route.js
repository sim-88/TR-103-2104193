const express = require('express');
const router = express.Router();
const {handlegenerateNewShortUrl, handlegetRedirecturl,handlegetAnalytics} = require('../controllers/url.controller');


router.post('/',handlegenerateNewShortUrl);

router.get('/:shortId', handlegetRedirecturl);
router.get('/analytics/:shortId', handlegetAnalytics);

module.exports=router;

