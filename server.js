const express = require('express');
const connectDB = require('./config/db')

const app = express();

//Connect Database
connectDB();

app.get('/', (req
              , res) => res.send('API Running'));

//Define Routers
app.use('/api/data', require('./routes/api/data'))

const PORT = process.env.PORT || 6000;

app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
