const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    const strArr = Object.keys(req.query).map(key => {
        return `${key}: ${req.query[key]}`;
    });
    res.send(strArr.join('\n'));
})

app.all('/', (req, res) => {
    res.send(Object.keys(req.body).map(key => {
        return `${key}: ${req.body[key]}`;
    }).join('\n'));
})

app.listen(3000, () => {
    console.log("서버 동작함");
})