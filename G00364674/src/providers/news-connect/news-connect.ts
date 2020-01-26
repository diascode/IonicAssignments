import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { HomePage } from '../../pages/home/home';



/*
  Generated class for the NewsConnectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsConnectProvider {
  url: string;
  
  country: string;
  country_temp:string="ie";
 
  
  

  constructor(public http: HttpClient, private storage:Storage) {
    
  }
  ionViewWillEnter(){
    
    this.storage.get("country")
      .then((data)=>{
        this.country =data;
        
      })
      .catch((err)=> {
        alert("Error Accessing Storage Country");
      });

      
  }
  
  getNews():Observable<any>{
    
    return this.http.get("https://newsapi.org/v2/top-headlines?country="+this.country+"&apiKey=87f9cdbf0e17468f9dd210c37fa9cb86");

}

}
