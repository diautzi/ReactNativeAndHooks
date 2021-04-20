const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;
    // this is hiw authorization will look like
    // authorization === Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDc3YmY2ZmE2OWNhYWYwN2RiODQyYTQiLCJpYXQiOjE2MTg0NjA1Mjd9.nlsIz69Rx6vDYdmRhvNUHNBeeDg8YM-d6sx_T2-9MyE

    if (!authorization) {
        return res.status(401).send({ error: 'You must be logged in' })
    };

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: 'You must be logged in' })
        }

        const { userId } = payload;

        const user = await User.findById(userId);
        req.user = user;
        next();
    });
};