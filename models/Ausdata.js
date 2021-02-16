const mongoose = require('mongoose');

const  AusdataSchema = new mongoose.Schema({
    updated:{
        type: Number,
    },
    continent:{
        type: String,
    },
    country:{
        type: String,
    },
    population:{
        type: Number,
    },
    cases:{
      type: Number,
    },
    todayCases:{
      type: Number,
    },
    deaths:{
        type: Number,
    },
    todayDeaths:{
        type: Number,
    },
    recovered:{
        type: Number,
    },
    todayRecovered:{
        type: Number,
    },
    active:{
        type: Number,
    },
    critical:{
        type: Number,
    },
    tests:{
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Ausdata = mongoose.model('ausdata', AusdataSchema)
