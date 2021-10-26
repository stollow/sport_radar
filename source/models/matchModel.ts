export class match {
    _id!: number;
    _doc!:string;
    fullDate:Date;
    tournamentId:number;
    time!:{
        time:string
        date:string
        tz:string
    }
    teams!:{
        home:{
            name:string
        },
        away:{
            name:string
        }
    }
    result!:{
        home:number
        away:number
    }
    comment!:string
    constructor(_id:number,_doc:string,away:string, home:string,fullDate:Date,scoreHome:number,scoreAway:number,comment:string,tournamentId:number){
        this._id = _id;
        this._doc = _doc;
        this.teams = {
            away:{
                name:away
            },
            home:{
                name:home
            }
        }
        this.result = {
            away: scoreAway,
            home:scoreHome
        }
        this.fullDate = fullDate;
        this.comment = comment;
        this.tournamentId = tournamentId
    }
}

export class apiMatchesObject{
    doc!:[{
        data:{
            matches: { [x: string]: match; }
        }
    }]
}


export default {match,apiMatchesObject}