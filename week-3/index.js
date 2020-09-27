const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/sum.html', express.static('sum.html'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('<h1>Hello, My Server!</h1>');
});
app.get('/getData', (req, res) => {
    let paramsValue = req.query.number;
    if (paramsValue) {
        paramsValue = Number(req.query.number);
        if (!isNaN(paramsValue) && paramsValue > 0 && paramsValue - (Math.floor(paramsValue)) == 0) {
            let result = '';
            let sum = 0;
            for (let i = 1; i < paramsValue; i++) {
                result += `${i}+`;
                sum += i;
            }
            sum += paramsValue;
            result += `${paramsValue}`;
            res.send(`<h1>${result}</h1>`);
        } else {
            res.send('<h1>Wrong Parameter</h1>');
        }
    } else {
        res.send('<h1>Lack of Parameter</h1>');
    }
});
app.get('/myName', (req, res) => {
    if (req.cookies.username) {
        res.send(`<h1>User name = ${req.cookies.username}</h1>`);
    } else {
        res.send(`
        <form action="/trackName" method="get">
            <label>User name is
                <input name="username" type="text" placeholder="請輸入姓名" required>
            </label>
            <button type="submit">Submit</button>
        </form>`);
    }
});
app.post('/myName', (req, res) => {
    res.redirect('/trackName');
});
app.get('/trackName', (req, res) => {
    let name = req.query.username;
    res.cookie("username", req.query.username);
    if (name) {
        res.redirect('/myName');
    } else {
        app.get(`/trackName?name=${name}`, (req, res) => {
            res.send('<h1>User name is empty</h1 >');
        })
    }
});
app.listen(3000, () => {
    console.log("runnnnnnnnnnning localhost:3000!!!");
});