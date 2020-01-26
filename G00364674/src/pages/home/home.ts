import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { DisplayNewsPage } from '../display-news/display-news';
import { QoteConnectionProvider } from '../../providers/qote-connection/qote-connection';
import { Storage } from '@ionic/storage';
import { NewsConnectProvider } from '../../providers/news-connect/news-connect';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName:string;
  country:string;
  qt: any; //quote today

  constructor(public navCtrl: NavController, private qo:QoteConnectionProvider, private news:NewsConnectProvider, private storage:Storage) {

  }
  connectNews(){
    console.log("news");
    this.navCtrl.push(DisplayNewsPage);
  }
  openSettings(){
    console.log("settings");
    this.navCtrl.push(SettingsPage);
  }
  ionViewDidLoad() {
    
    this.qo.getQote().subscribe(data=>{
      this.qt = data.contents.quotes;

    })
  }

  ionViewWillEnter(){
    
    this.storage.get("country")
      .then((data)=>{
        this.country =data;
        console.log(this.country);
      })
      .catch((err)=> {
        alert("Error Accessing Storage Country");
      });
      
    this.storage.get("userName")
        .then((data)=>{
          this.userName =data;
          console.log(this.userName);
        })
        .catch((err)=> {
          alert("Error Accessing Storage Username");
        });
     this.news.ionViewWillEnter();
    
  }
}
