import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  
  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  signIn() {

    if(this.uname.value == "admin" && this.password.value == "password"){

      const alert = this.alertCtrl.create({
                title: 'Success',
                subTitle: 'You have successfuly Logged In!!',
                buttons: ['OK']
              });
              alert.present();
              

    }
    else {
      const alert = this.alertCtrl.create({
        title: 'Failed',
        subTitle: 'Wrong Username or Password!',
        buttons: ['OK']
      });
      alert.present();
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
