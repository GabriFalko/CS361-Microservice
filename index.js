
const express = require('express')
const app = express()
const PORT = 3000

app.use( express.json() )                             // add middleware to convert body of request to json

app.listen(
    PORT,
    () => console.log('Listening on http://localhost:'+PORT)
)

var highestScorer = {                               // player with highest score
        name: '',
        score: 0
    }

function updateHighScores(highestScorer, player){   // updates highestScorer's score (int) and corresponding name (string).
    var score1 = highestScorer.score
    var score2 = player.score
    if(score2 >= score1){
        highestScorer.score = player.score
        highestScorer.name = player.name
    }
    return highestScorer
}

app.get('/highScore', (req, res) => {               // URI for highScores
    res.status(200).send({ 
        name: highestScorer.name,
        score: highestScorer.score })
})

app.post('/highScore/', (req, res) =>{           // save a highscore given a player's data { name, score }
    const { name } = req.body
    const { score } = req.body
    /*
    if(!player){                                    // check that a player object exists
        res.status(420).send({ message: 'Missing player object!' })
    }
    */
    if(!name){                                      // check that a name exists
        res.status(418).send({ message: 'Missing name!' })
    }
    if(!score){                                     // check that a score exists
        res.status(418).send({ message: 'Missing score!' })
    }
    var newplayer = {                // Model for how each added player should be sent as from the client
        name: name,
        score: score
    }
    updateHighScores(highestScorer, newplayer)        // updates highestScorer's score (int) and corresponding name (string).
    res.send({ message : 'Player '+name+' was succesfully added with highscore of '+score })
})

