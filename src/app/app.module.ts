import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Geolocation } from '@ionic-native/geolocation';

import { LoginPage } from '../pages/login/login';
import { ReportPage } from '../pages/report/report';
import { HelpPage } from '../pages/help/help';
import { AboutPage } from '../pages/about/about';
import { RoutePage } from '../pages/route/route';
import { RegisterPage } from '../pages/register/register';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ReportPage,
    HelpPage,
    AboutPage,
    RoutePage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ReportPage,
    HelpPage,
    AboutPage,
    RoutePage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
