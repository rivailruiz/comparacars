import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ComparativoPage } from '../comparativo/comparativo';
import { ListaService } from '../../providers/lista/lista';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ListaService]
})
export class HomePage {
	public marca: any;
	public name;
	

  constructor(
  	public Lista: ListaService,
  	public navCtrl: NavController,
  	public modalCtrl: ModalController,
  	) {
  		this.viewLista();
  }
  viewLista(){
 	this.Lista.getLista()
 	.then(data => {
 		this.marca = data;
 		console.log(this.marca);
 	});
  }
  openComparativo(){
  	let comparativoModal = this.modalCtrl.create(ComparativoPage);
   comparativoModal.present();
  }

}