import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewsConnectProvider } from '../../providers/news-connect/news-connect';
import { Storage } from '@ionic/storage';





/**
 * Generated class for the DisplayNewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display-news',
  templateUrl: 'display-news.html',
})
export class DisplayNewsPage {

  news: any [];
  result: any;
  titleSize: any;
  descriptionSize: any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private con:NewsConnectProvider, private storage:Storage) {
  }

  ionViewWillEnter(){
    
    this.storage.get("titleSize")
      .then((data)=>{
        this.titleSize =data;
        
      })
      .catch((err)=> {
        alert("Error Accessing Storage titleSize");
      });

    this.storage.get("descriptionSize")
        .then((data)=>{
          this.descriptionSize =data;
          
        })
        .catch((err)=> {
          alert("Error Accessing Storage descriptionSize");
        });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayNewsPage');
    
    this.con.getNews().subscribe(data => {
      this.news = data.articles;
      this.result = data.totalResults;
      
    })
  }
  
}
