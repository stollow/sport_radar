import requestTournaments from "../services/tournamentService";

const getTournament = async ()=> {
  console.log("Request for tournaments ...")
  try {
    return requestTournaments.requestTournaments()
  }
  catch(error){
    console.log("error while fetching tournaments")
    return error
  }
};

export default { getTournament };