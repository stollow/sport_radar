import { apiTournamentObject, tournament } from "../models/tournamentsModel"
const fetch = require("node-fetch")


let apiObject:apiTournamentObject
let data:JSON
let tournaments:tournament[] = []
async function requestTournaments(){
    await fetch('https://cp.fn.sportradar.com/common/en/Etc:UTC/gismo/config_tournaments/1/17')
    .then((res: { json: () => JSON }) => res.json())
    .then((json: JSON) => data = json);

    apiObject = Object.assign(new apiTournamentObject(),data)
    apiObject.doc[0].data.tournaments.forEach(tournamentData =>
        tournaments.push(new tournament(tournamentData._id,tournamentData.name, tournamentData._doc)))
        Object.keys(apiObject.doc[0].data.uniquetournaments).forEach(function(keys){
            let data = apiObject.doc[0].data.uniquetournaments[keys]
            tournaments.push(new tournament(data._id,data.name,data._doc))
        })
    return tournaments
};

export default { requestTournaments };
