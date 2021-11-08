const express = require('express');
const {runQuery} = require('./secret');
const app = express();

app.get('/fare', async (req, res) => {
    if(req.query.uid){
        const sql = `
        select users.name, sum(round(trains.distance/10*(types.fare_rate/100),-2)) as fare from tickets inner join trains on trains.id = tickets.train inner join types on trains.type = types.id inner join users on users.id = tickets.user where tickets.user = ${req.query.uid};
        `;
        const results = await runQuery(sql);
        res.send(`Total fare of ${results[0].name} is ${results[0].fare} KRW.`);
    } else {
        console.error();
        res.status(500).send('500 Internal Server Error');
    }
});

app.get('/train/status', async (req, res) => {
    if(req.query.tid){
        const sql = `
        select trains.id, count(*) as occupied, types.max_seats as maximum 
        from tickets 
        right join trains on tickets.train = trains.id 
        inner join types on trains.type = types.id 
        group by trains.id;
        `
        const list = await runQuery(sql);
        let isDone = -1;
        list.forEach((value, index) => {
            if(value.id === Number(req.query.tid)){
                if(value.occupied === Number(value.maximum)){
                    isDone = 1;
                } else {
                    isDone = 0;
                }
            }
        })
        if(isDone === -1){
            res.send("그런 기차는 없습니다만?");
        } else {
            res.send(`Train ${req.query.tid} is${isDone? '' : ' not'} sold out`);
        }
    } else {
        console.error();
        res.status(500).send('500 Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log("서버 동작함");
});