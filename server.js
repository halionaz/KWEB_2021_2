const express = require('express');
const app = express();
const port = 3000;

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render("home");
});
app.get('/page/:page', (req, res) => {
    const {page} = req.params;
    res.render('board', { page });
});
app.get('/posts/:until', (req, res) => {
    const { until } = req.params;
    const untilParsed = parseInt(until, 10);
    const posts = [];
    if (!isNaN(untilParsed)) {
        for (let i = 0; i < untilParsed; i++) {
            posts.push(`Post ${i + 1}`);
} }
    res.render('post', { posts });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));