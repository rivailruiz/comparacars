import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ComparativoPage } from '../comparativo/comparativo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
  	public modalCtrl: ModalController) {

  }

  openComparativo(){
  	let comparativoModal = this.modalCtrl.create(ComparativoPage);
   comparativoModal.present();
  }

}
