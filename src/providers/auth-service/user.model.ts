export class userModelResult{
    constructor(
        public id : number ,
        public userid : string ,
        public pwd : string ,
        public usertype : string ,
        public fname : string,
        public lname : string,
        public birthdate : Date,
        public gender : string,
        public Occupation : string,
        public country : string,
        public state :string,
        public Address :string,
        public mobileno : number,
        public email : string,
        public about :string,
        public createddate : string,
        public addandupdateby :string,
        public active : boolean,
        public picture : string){}
}


export class userModel{
    constructor(
         isSuccess : boolean,
         message : string ,
         Result : userModelResult
    ){}
}