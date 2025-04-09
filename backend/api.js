const express = require('express')

const app = express()
const PORT = 1995

app.use(express.json)

app.get('/', (res, req) => {
    res.json([{
        test: 'Daniel',
        id: 1
    }])
})

app.listen(PORT, () => {
    console.log(`Servidor esta em http://localhost:${PORT}`)
})
