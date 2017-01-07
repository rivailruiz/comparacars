import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ListaService {

	private data: any;

  constructor(public http: Http) {
    this.data = null;
  }
  // Get de todas as marcas
    getLista() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      this.http.get('http://fipeapi.appspot.com/api/1/carros/marcas.json')
        .map(res => res.json())
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
        });
    });
  }

   // Get modelos da marca selecionada
    getModelos(id) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.http.get(`http://fipeapi.appspot.com/api/1/carros/veiculos/${id}.json`)
      // this.http.get(`http://fipeapi.appspot.com/api/1/carros/veiculos/23.json`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
