import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp01-data-binding',
  templateUrl: './cmp01-data-binding.component.html',
  styleUrls: ['./cmp01-data-binding.component.css']
})
export class Cmp01DataBindingComponent implements OnInit {

  nombre: string = 'Fernando'
  nombre2: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  cambiarNombre = ():void => {
    this.nombre = 'Pepe'
    console.log(this.nombre)
  }


  cambiarNombre2 = (event: any) : void => {
    this.nombre = event.target.value
    console.log(event.target.value)
  }

}
