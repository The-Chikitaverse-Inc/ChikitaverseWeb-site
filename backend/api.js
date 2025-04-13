const express = require('express')
const jwt = require('json-web-token')

const app = express()
const PORT = 1995
const JWTSECRET = process.env.SECRETJWT

app.get('/', (req, res) => {
    res.json({
        title: 'The Chikitaverse Inc.',
        url: 'http://chikitaverse/',
        code: 'None'
    })
})

app.get('/client', (req, res) => {
    res.json({
        message: 'Not Found',
        code: 404
    })
})

app.post('/login' , (req, res) => {
    if (req.body.user === 'Daniel' && req.body.password === '12345') {
        jwt.sign({ id: 1 }, JWTSECRET)
        return res.end()
    }
    
    res.status(401).end()
})

app.listen(PORT, () => {
    console.log(`Api esta em http://localhost:${PORT}/`)
})