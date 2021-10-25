import express from 'express';
import tournament from '../controllers/tournament';

const router = express.Router();

router.get('/ping', async (req, res, next) =>{
    console.log("fetching...")
    try{
        console.log("fetching tournaments")
        const json = await tournament.getTournament()
        res.status(200).send(json)

    }catch(error){
        console.log("fetching errors")
        console.log(error)
        res.status(500).send(error)
    }


});

export = router;
