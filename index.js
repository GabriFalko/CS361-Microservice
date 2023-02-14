const express = require('express')
const app = express()
app.listen(port, () => console.log("listening at port", port))
app.use(express.static('public'))
app.use(express.josn({ limit: '1mb' }))

const scoreboard = []

app.post('/api', (req, res) => {
    console.log('received equest')
    console.log('URL: ', req.url)
    console.log('IP: ', req.ip)
    console.log('body; ', req.body)
    const score = req.body
    scoreboard.push(score)
    console.log(scoreboard)
    res.json({
        status: 'success',
        latitude: score.lat,
        longitude: score.lon
    })
})