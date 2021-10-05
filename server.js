const express = require('express');
const router = require('./router');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(`Random Number: ${randomNumber}`);
    if (randomNumber % 3) return next();
    else return res.sendStatus(403);
});
app.use((req, res, next) => {
    const { method, path } = req;
    console.log(`${method} ${path}`);
    return next();
});

// app.get('/', (req, res) => res.send('GET /'));
// app.post('/', (req, res) => res.send('POST /'));
app.use('/', router);
app.listen(port, () => console.log(`Server listening on port ${port}!`));