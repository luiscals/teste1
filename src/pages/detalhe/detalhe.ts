import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { detachEmbeddedView } from '@angular/core/src/view';

/**
 * Generated class for the DetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {
  cont;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cont = this.navParams.get('conteudo');
    console.log('conteudo');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

}
