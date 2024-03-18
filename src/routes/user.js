const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser } = require('../controllers/userContoller');
const router = express.Router();

const User = require('../models/user');

router.post('/create', createUser);
router.get('/', async (req, res) =>{
    
    if(true) {
        console.log('no users yet .. sorry!');
        res.status(500).json({success:false})
    }
    
})


module.exports = router;