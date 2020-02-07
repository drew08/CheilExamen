const cors = require('cors');
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

//const indexRoutes = require('./routes/index');
const hotelsRoutes = require('./routes/hotels');

const port = 5000;


app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// Where we will keep hotels

app.use(cors());
// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
//app.use(indexRoutes);
app.use('/api',hotelsRoutes);

//static files
app.use(express.static(path.join(__dirname,'dist')))

//start server


app.listen(port, () => console.log(`hotel app listening on port ${port}!`));