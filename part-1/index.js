const express = require ('express')
const app = express ()

app.get('/', function (req, res) {
    res.send('Acceptable routes: /zero, /add, /subtrack, /double/:number')
})

app.get('/zero', function (req, res) {
    res.send('0')
})

app.get('/add', function (req, res) {
    let sum = parseInt(req.query.a) + parseInt(req.query.b);
    res.send(sum.toString())
})

app.get('/subtract', function (req, res) {
    let difference = parseInt(req.query.a) - parseInt(req.query.b);
    res.send(difference.toString())
})

app.get('/double/:number', function (req, res) {
    let realNumber = parseInt (req.params.number) * 2
    realNumber = realNumber.toString()
    res.send(realNumber)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
