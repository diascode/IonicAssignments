import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { NewsConnectProvider } from '../../providers/news-connect/news-connect';



/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  userName: string;
  country: string;
  titleSize: string;
  descriptionSize: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage:Storage, private con:NewsConnectProvider) {
   
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
    this.storage.get("userName")
        .then((data)=>{
          this.userName =data;
          console.log(this.userName);
        })
        .catch((err)=> {
          alert("Error Accessing Storage Username");
        });
  }
 
  saveSettings(){
    
    this.storage.set("userName", this.userName);
    this.storage.set("country", this.country);
    this.storage.set("titleSize", this.titleSize);
    this.storage.set("descriptionSize", this.descriptionSize);

    this.navCtrl.pop();
    console.log(this.userName, this.country, this.titleSize, this.descriptionSize);
    
  }
  
}
