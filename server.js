const express = require('express');
const app = express();
const port = 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render("home");
});
app.get('/page', (req, res) => {});
app.get('/posts', (req, res) => {});

app.listen(port, () => console.log(`Server listening on port ${port}!`));