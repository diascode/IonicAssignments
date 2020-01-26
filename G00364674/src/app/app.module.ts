import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {IonicStorageModule } from '@ionic/storage'


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewsConnectProvider } from '../providers/news-connect/news-connect';
import { SettingsPage } from '../pages/settings/settings';
import { DisplayNewsPage } from '../pages/display-news/display-news';
import { HttpClientModule } from '@angular/common/http';
import { QoteConnectionProvider } from '../providers/qote-connection/qote-connection';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    DisplayNewsPage
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    DisplayNewsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NewsConnectProvider,
    QoteConnectionProvider
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
