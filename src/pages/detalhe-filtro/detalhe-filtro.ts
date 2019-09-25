import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheFiltroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-filtro',
  templateUrl: 'detalhe-filtro.html',
})
export class DetalheFiltroPage {

  count;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.count = this.navParams.get('miolo');
    console.log('miolo');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheFiltroPage');
  }

}
