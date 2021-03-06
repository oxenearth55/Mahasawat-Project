const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

// SECTION  Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const shopRoutes = require('./routes/shop');
const braintreeRoutes = require('./routes/braintree');


// SECTION  App
const app = express();

app.get("/", (req, res) => {
    res.send("hello from node1235!");
});

// SECTION  Database
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB Connected'));
mongoose.connection.on('error', err => {
        //console.log(`DB connection error: ${err.nessage}`);
});

// SECTION  Middlewares
app.use(morgan('dev'));
// app.use(bodyParser.json());
// app.use(cookieParser());
app.use(bodyParser.json({limit: '100mb'}));
app.use(bodyParser.urlencoded({limit: '100mb'}));app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// SECTION Routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', shopRoutes);
app.use('/api', braintreeRoutes);


const port = process.env.PORT || 49154; 

// NOTE 49154 is DEFAULT PORT

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});