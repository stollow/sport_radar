import express from 'express';
import getTournament from '../controllers/tournament';
import getMatches from '../controllers/match';
import { tournament } from '../models/tournamentModel';
import { match } from '../models/matchModel';

const app = express()

let tournaments: tournament[] = []
let matches: match[] = []
app.get('/tournaments', async (req, res, next) =>{
    console.log("fetching...")
    try{
        tournaments = await getTournament.getTournament()
        res.status(200).send(tournaments)

    }catch(error){
        res.status(500).json({
            message: error,
          });
    }


});

app.get('/matches', async (req, res, next) =>{
    console.log("fetching...")
    try{
        matches = await getMatches.getMatches()
        res.status(200).send(matches)

    }catch(error){
        res.status(500).json({
            message: error,
          });
    }


});


export = app;
