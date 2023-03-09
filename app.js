const express = require('express')

const app = express()

let locations = ["all locations put here"]

class Player{
    constructor(playerName, nation){
        this.playerName = playerName;
        this.nation = nation;
    }
}


app.get('/', (request, response) => {
     response.send("Risk is a game of fucking each other over")
})

app.get('/addPlayer/:playerName/:startingNation/:startingArmies', (request, response) => {
     response.send("This is your start, Who you are and what you got. Number of Armies are based on presets")
     //armies are based on the nation picked, make potential if cases to determine starting armies to avoid someone making too large of army at start
})

app.get('/territories', (request, response) => {
     response.send("Full Array of locations")
})


app.get('/viewAllPLayers', (request, response) => {
     response.send("Array of Players")
})

app.get('/map', (request, response) => {
     response.send("Current status of Map")
})

app.get('/rollDice', (request, response) => {
     response.send("Random numbers for your attacking and defending")
})

app.get('/addArmies/:rolldice', (request, response) => {
    response.send("This is how you get more armies")
})

app.get('/moveArmies/:initialTerritory/:targetTerritory', (request, response) => {
     response.send("Attempting to move from initial territory to target territory")
})




app.listen(3000, () => {
    console.log(`Server is Listening on 3000`)
})

