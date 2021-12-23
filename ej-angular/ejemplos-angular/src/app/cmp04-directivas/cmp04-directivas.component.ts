import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp04-directivas',
  templateUrl: './cmp04-directivas.component.html',
  styleUrls: ['./cmp04-directivas.component.css']
})
export class Cmp04DirectivasComponent implements OnInit {

  colorLetra: string = 'white'
  tachada: boolean = false
  logueado: boolean = false

  mascotas: Array<string> = [
    'perro',
    'gato',
    'canario'
  ]

  mascotaSeleccionada: string = 'gato'

  constructor() { }

  ngOnInit(): void {
  }

  toggleTachada(){
    this.tachada = !this.tachada
  }

  toggleLogueado(){
    this.logueado = !this.logueado
  }
}
