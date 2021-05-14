import {Component} from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  nombre = 'Iron Man';
  edad = 45;

  get nombreCapitalizado(): string{
    return this.nombre.toLocaleUpperCase();
  }

  obtenerNombre(): string{

    return `${ this.nombre}- ${this.edad }`;
  }

  cambiarNombre(): void{
    this.nombre = 'Spider Man';
  }

  cambiarEdad():void{
    this.edad = 23;
  }

}
