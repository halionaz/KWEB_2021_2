const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));
app.set('views', `${__dirname}`);
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    res.send(`${req.body.id} \n ${req.body.pw}`);
})

app.listen(3000, () => {
    console.log("서버 동작함");
})