const express = require('express');
const router = express.Router();
const config = require('config');

const Ausdata = require('../../models/Ausdata')


// @route GET api/ausdata
//@desc get covid-19 data
//@access public
router.get('/ausdata',async (req
                 ,res) => {
    try{

        const data = await Ausdata.find().sort({date: -1}).limit(1);
        res.json(data)

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error')

    }
}

);
module.exports = router;
