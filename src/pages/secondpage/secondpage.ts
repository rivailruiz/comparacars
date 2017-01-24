import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ComparativoPage } from '../comparativo/comparativo';
import { ListaService } from '../../providers/lista/lista';

/*
  Generated class for the Secondpage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-secondpage',
  templateUrl: 'secondpage.html',
  providers: [ListaService]
})
export class SecondPage {

	public marca;
	public obj;

  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  	public modalCtrl: ModalController,
  	public Lista: ListaService
  	) {
  	this.viewListaMarcasItem1();
  }

  ionViewDidLoad() {
    console.log(this.obj);
  }

	viewListaMarcasItem1(){
		this.Lista.getMarcas()
		.then(data => {
			this.marca = data;
			// console.log(this.marca);
			console.log("Carreguei as marcas!");
		});
	}
	openComparativo(){
		let comparativoModal = this.modalCtrl.create(ComparativoPage);
	comparativoModal.present();
	}
}
