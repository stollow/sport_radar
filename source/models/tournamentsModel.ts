export class tournament {
    _id!: number;
    name!: string;
    _doc!:string;
    constructor(_id:number,name:string,_doc:string){
        this._id = _id;
        this.name = name;
        this._doc = _doc
    }
}

export class apiTournamentObject{
    doc!:[{
        data:{
            tournaments:tournament[]
            uniquetournaments: { [x: string]: any; }
        }
    }]
}


export default {tournament,apiTournamentObject}