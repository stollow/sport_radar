import { apiTournamentsObject, tournament } from "../models/tournamentModel";
import requestTournaments from "../services/tournamentService";

let apiObject:apiTournamentsObject
let data:JSON
let tournaments:tournament[] = []
const getTournament = async (): Promise<tournament[]> => {
  console.log("Request for tournaments ...")
  try {
    data = await requestTournaments.requestTournaments()
    apiObject = Object.assign(new apiTournamentsObject(),data)
    apiObject.doc[0].data.tournaments.forEach(tournamentData =>
        tournaments.push(new tournament(tournamentData._id,tournamentData.name, tournamentData._doc)))
        Object.keys(apiObject.doc[0].data.uniquetournaments).forEach(function(keys){
            let data = apiObject.doc[0].data.uniquetournaments[keys]
            tournaments.push(new tournament(data._id,data.name,data._doc))
        })
    return tournaments
  }
  catch(error){
    console.log(error)
    throw(error)
  }
};

export default { getTournament };