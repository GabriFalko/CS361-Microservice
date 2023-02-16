const express = require('express')
const app = express()
const PORT = 3000

app.use( express.json() )                           // add middleware to convert body of request to json

app.listen(
    PORT,
    () => console.log('Listening on http://localhost:'+PORT)
)

const MAX_SCORES = 10                               // set maximum number of sorted players in array 
const highScores = [{
    name: 'Gabriele',                               // can be an empty string
    score: 0
}]                                                  // an array that will hold top scorers in order

// updates 'newest' highestScorer's score (int) and corresponding name (string) + adds and sorts new player into highScores array.
function updateHighScores(newPlayer){   
    highScores.push(newPlayer)                      // add newPlayer to highScores
    highScores.sort((a,b) => b.score - a.score )    // sort highScore array so that highest player is at index 0
    highScores.splice(MAX_SCORES)
    return 0                                        // for later checks
}

app.get('/highScore', (req, res) => {               // URI returns highestScorers name and score
    const highestScorer = highScores[0]
    const name = highestScorer.name
    const score = highestScorer.score
    res.status(200).send({ 
        name: name,
        score: score
     })
})

app.get('/highScore/:pos', (req, res) => {          // URI for specific player, returns name and score, given position (pos)
    const { pos } = req.params
    const player = highScores[pos]
    const name = player.name
    const score = player.score
    if(!player){
        res.status(409).send({ message: "The entered position doesn't exist!" })
    }
    res.status(201).send({ 
        name: name,
        score: score
     })
})

app.post('/highScore', (req, res) =>{               // URI to save a highscore given a player's data { name, score }
    const { name } = req.body
    const { score } = req.body
    if(!name){                                      // check that a name exists
        res.status(406).send({ message: 'Missing name!' })
    }
    if(!score){                                     // check that a score exists
        res.status(406).send({ message: 'Missing score!' })
    }
    var newplayer = {                               // Model for how each added player should be sent as from the client
        name: name,
        score: score
    }
    if(!updateHighScores(newplayer) == 0  ){        // check newPlayer was added succesfully
        res.status(505).send({ message : 'New player could not be added'} )
    } else       
    res.status(202).send({ message : 'Player '+name+' was succesfully added with highscore of '+score }) // just a confermation message
   // console.log(highScores)    // optional step to watch how the array of highscores fluctuates
})

