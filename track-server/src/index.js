require('./models/User')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);

// connecting to mongo db
const mongoUri = 'mongodb+srv://diana:utan@cluster0.uvmiv.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});
// console.log if connection succesful
mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance')
});
// console.log errors
mongoose.connection.on('error', (err) => {
    console.error('Error connecting to mongo', err)
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Your email : ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});