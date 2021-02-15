const express = require('express');
const router = express.Router();
const config = require('config');


// @route GET api/data
//@desc get covid-19 data
//@access public
router.get('/',(req
                 ,res) => res.send('hello')
);


module.exports = router;
