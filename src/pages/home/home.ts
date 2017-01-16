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
	public obj;
	public newValue;


  constructor(
  	public Lista: ListaService,
  	public navCtrl: NavController,
  	public modalCtrl: ModalController,
  	) {
  		this.viewListaMarcasItem1();
  		
}

  viewListaMarcasItem1(){
 	this.Lista.getMarcas()
 	.then(data => {
 		this.marca = data;
 		// console.log(this.marca);
 		console.log("Carreguei as marcas!");
 	});
  }

  viewListaModelosItem1(id){
 	this.Lista.getModelos(id)
 	.then(data => {
 		this.modelo = data;
 		// console.log(this.modelo);
 	});
  }

  onChangeMarca(idDaMarca) {
    this.obj = idDaMarca;  
    console.log(idDaMarca);
    this.viewListaModelosItem1(idDaMarca);
}

  onChangeModelo(idDoCarro) {
    console.log(idDoCarro);
    this.obj = idDoCarro;  
}

  openComparativo(){
  	let comparativoModal = this.modalCtrl.create(ComparativoPage);
   comparativoModal.present();
  }




nextpage(){
  
}



}