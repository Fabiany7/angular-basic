import {Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})

export class ContadorComponent{
  title:string = 'prueba paso de informacion';
  numero = 10;
  base = 5;


  acomular(valor:number):void{
    this.numero += valor;

  }
}
