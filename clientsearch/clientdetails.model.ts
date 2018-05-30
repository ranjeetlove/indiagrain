export class clientModelResult{
    constructor(
        public CallStatus :string,
        public ClientStage :string,
        public Clientindustryname :string,
        public FollowupRemark :string,
        public Media :string,
        public MobExt1 :string,
        public MobExt2 :string,
        public MobExt3 :string,
        public MobExt4 :string,
        public SmsDuration :string,
        public SmsRemark :string,
        public address :string,
        public callingdate :Date,
        public callvisitdate :Date,
        public clientdetailid :string,
        public clientfollowupby :string,
        public clientfollowupdate :Date,
        public clientid :string,
        public clientindustry :string,
        public clientstatus :Number,
        public competerdetails :string,
        public contactperson :string,
        public country :string,
        public createddate :Date,
        public createdupdatedby :string,
        public district :string ,
        public email1 :string,
        public email2 :string,
        public enquirydate :Date,
        public expectedfinaliseddate :Date,
        public faxtel :string,
        public firmname :string,
        public followby :string,
        public followdate :Date,
        public followmedia :string,
        public greetingorder :Number,
        public id :number,
        public mobile1 :number,
        public mobile2 :number,
        public mobile3 :number,
        public mobile4 :number,
        public pincode :number,
        public quotationdate :Date,
        public remark :string,
        public sname :string,
        public sourceofenquiry :string,
        public state :number,
        public tranferfollowby :string,
        public typeofenquiry :string,
        public website :string
    ){}
}


export class clientModel{
    constructor(
         isSuccess : boolean,
         message : string ,
         Result : clientModelResult
    ){}
}