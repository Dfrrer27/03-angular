import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre    : string = 'Diego Ferrer';
  nombre2   : string = 'dieGO fErrER rUpayLLA'; 
  PI        : number = Math.PI;
  porcentaje: number = 0.234;
  salario   :number = 1234.5;
  fecha     :Date = new Date();
  idioma    :string = 'en';
  videoUrl  :string = 'https://www.youtube.com/embed/lM4A6SBK1uQ';
  activar   :boolean = true;  
  arreglo = [1,2,3,4,5,6,7,8,9,10];

  valorPromesa = new Promise<string>( (resolve) => {

    setTimeout(() =>  {
      resolve('llego la data')
    },3500);
  });


  heroe = {
    nombre: 'Diego',
    clave: 'Estudiante PFR',
    edad: 18,
    direccion: {
      calle: 'Primera',
      casa: '20'
    }
  }
}
