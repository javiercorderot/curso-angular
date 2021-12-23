import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import { AuthService } from '../servicios/auth.service';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {

  datos: Array<string> = []
  isLoggedIn: boolean = false

  constructor(private datosService: DatosService, private auth: AuthService, private eventos: EventosService) {
    this.eventos.authEvent$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn
    })
   }

  ngOnInit(): void {
   
    this.datos = this.datosService.getDatos()
  }

  guardar(texto: string): void{
    this.datosService.addDato(texto)
  }

}
