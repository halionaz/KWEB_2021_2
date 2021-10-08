const express = require('express');
const app = express();

const factorial = (N) => {
    if(!N){
        return 1;
    }
    let ans = 1;
    for(let i = 1; i <= N; i++){
        ans *= i;
    }
    return ans;
};

app.get('/factorial', (req, res) => {
    res.redirect(`/factorial/${req.query.number}`);
});
app.get('/factorial/:number', (req, res) => {
    res.send(String(factorial(Number(req.params.number))));
});

app.listen(3000, () => {
    console.log("서버 동작함");
});