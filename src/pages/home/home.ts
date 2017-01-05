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
	public id;
	public modelo;

  constructor(
  	public Lista: ListaService,
  	public navCtrl: NavController,
  	public modalCtrl: ModalController,
  	) {
  		this.viewListaMarcas();
  		this.viewListaModelos(this.id);
  }
  viewListaMarcas(){
 	this.Lista.getLista()
 	.then(data => {
 		this.marca = data;
 		console.log(this.marca);
 	});
  }

  viewListaModelos(id){
 	this.Lista.getModelos(id)
 	.then(data => {
 		this.modelo = data;
 		console.log(this.modelo);
 	});
  }


  openComparativo(){
  	let comparativoModal = this.modalCtrl.create(ComparativoPage);
   comparativoModal.present();
  }

}