
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { followupModel, followupModelResult } from '../../providers/followup/followup.model';

let apiUrl ="http://34.207.7.22/indiagrain/index.php/api_panel/followups/"
/*
  Generated class for the FollowupProvider provider.  

*/
@Injectable()
export class FollowupProvider {
  followupmodel: followupModel;
  followdata: any;
 // followdataid: any;
  followupdetails: any;
  constructor(public http: HttpClient) {
  //  console.log('Hello FollowupProvider Provider');
  }
   
  todayData(credentials, followup_list){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders();
      this.http.post(apiUrl+followup_list, JSON.stringify(credentials), {headers: headers}).subscribe(res =>{
         resolve(JSON.stringify(res));
         this.followupmodel = res['Result']; 
         this.followdata = this.followupmodel;
        // this.followdataid = (this.followdata[0].id);
         //console.log(this.followdataid);
      }, (err) =>{
         reject(err);
      });
    })
  }

  detailsData(credentials, followup_list){
      return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders();
      this.http.post(apiUrl+followup_list, JSON.stringify(credentials), {headers: headers}).subscribe(res =>{
         resolve(JSON.stringify(res));
         this.followupmodel= res['Result'];
         //this.followupdetails = this.followupmodel;
        // console.log(this.followupdetails);
      }, (err) =>{
         reject(err);
      });
    })
  }
}
