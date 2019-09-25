import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavParams, Nav } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RedditServiceProvider } from '../providers/reddit-service/reddit-service';
import { DetalhePage } from '../pages/detalhe/detalhe';
import {DetalheFiltroPage} from '../pages/detalhe-filtro/detalhe-filtro';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetalhePage,
    DetalheFiltroPage,
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    DetalhePage,
    DetalheFiltroPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RedditServiceProvider
  ]
})
export class AppModule {}
