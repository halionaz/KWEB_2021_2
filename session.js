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
    const {id} = req.params;
    req.session.requester = {
        id: parseInt(id, 10),
        name: `user#${id}`,
        level: Math.floor(Math.random() * 10) + 1,
    };
    return res.send(`completed /set/${id}`);
});

app.get('/get', (req, res) => {
    const { requester } = req.session;
    if(!requester) return res.sendStatus(401);
    const {id, name, level} = requester;
    return res.send(`${id} | ${name} | ${level}`);
});

app.get('/destroy', (req, res) => {
    req.session.destroy(err => {
        if(err) return res.sendStatus(500);
        else return res.send('Destroy Completed');
    })
})

app.listen(port, () => {
    console.log("서버 작동중");
});