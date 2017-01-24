import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ComparativoPage } from '../comparativo/comparativo';

/*
  Generated class for the Secondpage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-secondpage',
  templateUrl: 'secondpage.html'
})
export class SecondPage {

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public modalCtrl: ModalController
  	) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondpagePage');
  }

	openComparativo(){
		let comparativoModal = this.modalCtrl.create(ComparativoPage);
	comparativoModal.present();
	}
}
