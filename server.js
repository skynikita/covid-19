const express = require('express');
const cron = require('node-cron')
const connectDB = require('./config/db')
const axios = require('axios');
const path = require('path')

const Ausdata = require('./models/Ausdata')


const app = express();

//Connect Database
connectDB();

//Schedule tasks to be run on the server.
cron.schedule('0 * * * *',function(){
    console.log('running a task every HOUR');
    axios.get('https://corona.lmao.ninja/v2/countries/Australia?yesterday')
        .then(res => {
            const {
                updated,
                continent,
                country,
                population,
                cases,
                todayCases,
                deaths,
                todayDeaths,
                recovered,
                todayRecovered,
                active,
                critical,
                tests,
            } = res.data;

            ausdata = new Ausdata({
                updated,
                continent,
                country,
                population,
                cases,
                todayCases,
                deaths,
                todayDeaths,
                recovered,
                todayRecovered,
                active,
                critical,
                tests,
            });

            ausdata.save();

        })
        .catch(err => {
            console.log(err);
        })
});



//Define Routers
app.use('/api/data', require('./routes/api/data'))

if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}


const PORT = process.env.PORT || 6000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));

