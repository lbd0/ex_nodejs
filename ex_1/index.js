const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World!')
  })


app.get('/dog', function (req, res) {
  res.json({'sound' : '멍멍'})
})


app.get('/cat', function (req, res) {
    res.send({'sound' : '야옹'})
  })

app.get('/user/:id', function (req, res) {
    const p = req.params
    console.log(p)

    const q = req.query
    console.log(q)
    console.log(q.name)

    res.send({'userid' : q.name})
  })

app.get('/sound/:name', function (req, res) {
    const { name } = req.params
    
    if(name == "dog") {
        res.send({'sound' : '멍멍'})
    } else if(name == "cat") {
        res.json({'sound' : '야옹'})
    } else if(name == "pig") {
        res.json({'sound' : '꿀꿀'})
    } else {
        res.json({'sound' : '알 수 없음'})
    }
    
  })

app.listen(3000)