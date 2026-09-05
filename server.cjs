require('dotenv').config();
const path = require('path');
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const ratelimit = require('express-rate-limit');
const mysql = require('mysql2');

const app = express();

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            ...helmet.contentSecurityPolicy.getDefaultDirectives(),
            "img-src": ["'self'", "data:", "https:"],
        },
    },
}));
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/api', ratelimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'too many requests, try again later.'
}));

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/*splat', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});
