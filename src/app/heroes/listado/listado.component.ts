import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() { console.log ('Constructor!!!') }

  ngOnInit(): void {
    console.log ('OnInit!!!')
  }

  _listadoSe:string[] = ['Superman', 'Ironman', 'Spiderman', 'Capitan America'];
  heroeb: string = '';
  
  borrarHeroe () {

    if (this._listadoSe.length > 0) {
        this.heroeb = this._listadoSe.shift() || '';
    }
  }

}
