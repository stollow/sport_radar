import { match, apiMatchesObject } from "../models/matchModel";
import { tournament } from "../models/tournamentModel";
import getTournament from '../controllers/tournament';
import requestMatches from '../services/matchService'

let apiObject:apiMatchesObject
let data:JSON
let matches:match[] = []
let tournamentList: tournament[] = []

const getMatches = async ():Promise<match[]> => {
    console.log("Request for matches ...")
  try {
    tournamentList = await getTournament.getTournament()
    await tournamentList.forEach( async element => {
        data = await requestMatches.requestMatches(element._id)
        apiObject = Object.assign(new apiMatchesObject(),data)
        Object.keys(apiObject.doc[0].data.matches).forEach(function(keys){
            let data = apiObject.doc[0].data.matches[keys]
            let dateData = data.time.date.split("/")
            let dateString = "20"+dateData[2]+"-"+dateData[1]+"-"+dateData[0]
            let hoursData = data.time.time.split(":")
            let date = new Date(dateString)
            date.setHours(parseInt(hoursData[0]))
            date.setMinutes(parseInt(hoursData[1]))
            matches.push(new match(data._id,data._doc,data.teams.away.name,
                data.teams.home.name,date,data.result.home,data.result.away,data.comment,element._id, data.time.uts))
            matches = matches.filter((a) => Date.now() > a.fullDate.getTime())
            matches.sort((a,b)=> b.fullDate.getTime() - a.fullDate.getTime())
            matches = matches.slice(0,5)
            matches.sort((a,b)=> b.tournamentId - a.tournamentId & b.timeplay - a.timeplay)
        })
    })
    return matches
  }
  catch(error){
    Promise.reject()
    console.log(error)
    return []
  }

};

export default { getMatches };