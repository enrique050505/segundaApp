import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }

  //NOMBRES
  serie1 = "Peaky Blinders"
  serie2 = "Vikingos"
  serie3 = "Breaking Bad"
  serie4 = "You"
  serie5 = "Better Call Saul"
  //ICONOS
  icono1 = "cafe-outline";
  icono2 = "pizza-outline";
  icono3 = "key-outline";
  icono4 = "trophy-outline";
  icono5 = "wine-outline";

  //ARRAY
  elementos = [
    {
      icono: 'alarm-outline',
      nombre: 'Peaky blinders'
    },
    {
      icono: 'apps-outline',
      nombre:'pagina3'
    }
  ]

  ngOnInit() {
  }

}
