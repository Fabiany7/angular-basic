import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

    heroes: string [] = ['capitan america', 'iron man', 'spiderman', 'thor', 'flacon'];
    dato = '';

  borrarHeroes() {

     this.dato = this.heroes.shift() || '';
     console.log(this.dato);
  }
  borrarHeroe(valor: number): void{

    this.heroes[valor] = ' ';

  }

}
