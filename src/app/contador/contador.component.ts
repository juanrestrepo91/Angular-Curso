import { Component } from "@angular/core";

@Component ({
    selector: 'app-contador',
    template: `
    <p> {{ title }}</p>

    <h3>La base es: <strong> {{ base }}</strong></h3>

    <button (click)="acumular(base)"> + {{ base }} </button>

    <span> {{ num }} </span>

    <button (click)="acumular(-base)"> - {{ base }} </button>

    `
})
export class contadorComponent {

    title = 'bases';
    num: number = 10;
  
    base: number = 3; 
    
    acumular ( valor: number): void {
      this.num += valor;
    }
}