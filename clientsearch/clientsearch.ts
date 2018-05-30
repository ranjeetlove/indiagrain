
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clientModel } from '../../providers/clientsearch/clientdetails.model';

let apiUrl ="http://34.207.7.22/indiagrain/index.php/api_panel/followups/"

@Injectable()
export class ClientsearchProvider {
   
  clientmodel = clientModel;
  clientData :any;
  constructor(public http: HttpClient) {
    console.log('Hello ClientsearchProvider Provider');
  }
 
  getClient(credentials, followup_list){
    return new Promise((resolve, reject)=>{
      let headers = new HttpHeaders();
      this.http.post(apiUrl+followup_list, JSON.stringify(credentials), {headers: headers}).subscribe(res =>{
         resolve(JSON.stringify(res));
         this.clientData = res;
         this.clientmodel = res['Result'];
        // console.log(this.clientData);
      }, (err) =>{
         reject(err);
      });
    })
  }


}
