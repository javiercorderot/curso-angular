import { Component, OnInit } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {

  datos: Array<string> = []

  constructor(private datosService: DatosService) { }

  ngOnInit(): void {
    this.datos = this.datosService.getDatos()
  }

  guardar(texto: string): void{
    this.datosService.addDato(texto)
  }

}
