const express = require('express');
const mongoose = require('mongoose');
//const morgan = require('morgan');
//const bodyParser = require('body-parser');
//const cookieParser = require('cookie-parser');
//const cors = require('cors');
//const expressValidator = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();

// SECTION  Routes
//const authRoutes = require('./routes/auth');
//const userRoutes = require('./routes/user');
//const categoryRoutes = require('./routes/category');
//const productRoutes = require('./routes/product');
//const orderRoutes = require('./routes/order');

// SECTION  App
const app = express();

// SECTION  Database
mongoose
    .connect(process.env.DATABASE, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB Connected'))
mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

// SECTION  Middlewares
//app.use(morgan('dev'));
//app.use(bodyParser.json());
//app.use(cookieParser());
//app.use(expressValidator());
//app.use(cors());

// SECTION Routes middleware
//app.use('/api', authRoutes);
//app.use('/api', userRoutes);
//app.use('/api', categoryRoutes);
//app.use('/api', productRoutes);
//app.use('/api', orderRoutes);

const port = process.env.PORT || 49153; // NOTE 49154 is DEFAULT PORT

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
