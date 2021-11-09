const express = require('express');
const session = require('express-session');

const app = express();
const port = 3000;

app.use(session({
    secret: 'AJDSKLD$@!($@%$',
    resave: false,
    saveUninitialized: true,
}));

app.get('/set/:id', (req, res) => {
    
})

app.listen(port, () => {
    console.log("서버 작동중");
})