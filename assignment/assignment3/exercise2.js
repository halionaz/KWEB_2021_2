const express = require('express');
const app = express();

app.get('/board/page/:page', (req, res) => {
    res.send(`This is page #${req.params.page}`);
})

app.listen(3000, () => {
    console.log("서버 동작함");
})