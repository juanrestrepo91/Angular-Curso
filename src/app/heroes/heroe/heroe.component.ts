import { Component } from "@angular/core";

@Component ({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class Heroe {
    nombre: string = 'IronMan';
    edad: number = 46;

    get getNombreCapitalize (): string {
        return this.nombre.toUpperCase ();
    }

    getNombreCompleto (): string {
        return ` ${ this.nombre } - ${ this.edad }`;
    }
    
    cambiarNombre (): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad (): void {
        this.edad = 32;
    } 
}