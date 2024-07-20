const express = require('express');
const {handleUserSignUp,handleUserLogin}=require('../controllers/user.controller');

const router = express.Router();
const userController = require('../controllers/user.controller');

router.post('/', handleUserSignUp);
router.post('/login', handleUserLogin);
module.exports = router;