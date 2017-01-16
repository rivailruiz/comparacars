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
	public marca1: any;
  public marca2: any;
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
      this.viewListaMarcasItem2();
  		
}

  viewListaMarcasItem1(){
 	this.Lista.getMarcas()
 	.then(data => {
 		this.marca1 = data;
 		// console.log(this.marca);
 		// console.log("Carreguei as marcas!");
 	});
  }

  viewListaModelosItem1(id1){
 	this.Lista.getModelos(id1)
 	.then(datax => {
 		this.modelo = datax;
 		// console.log(this.modelo);
 	});
  }

  onChangeItem1(idDaMarca) {
    this.obj = idDaMarca;  
    console.log(idDaMarca);
    this.viewListaModelosItem1(idDaMarca);
}



  viewListaMarcasItem2(){
   this.Lista.getMarcas()
   .then(data => {
     this.marca2 = data;
     // console.log(this.marca);
     // console.log("Carreguei as marcas!");
   });
  }

  viewListaModelosItem2(id2){
   this.Lista.getModelos(id2)
   .then(datax => {
     this.modelo = datax;
     // console.log(this.modelo);
   });
  }

  onChangeItem2(idDaMarca2) {
    this.obj = idDaMarca2;  
    console.log(idDaMarca2);
    this.viewListaModelosItem2(idDaMarca2);
}






  openComparativo(){
  	let comparativoModal = this.modalCtrl.create(ComparativoPage);
   comparativoModal.present();
  }




}