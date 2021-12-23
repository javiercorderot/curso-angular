import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mi-boton',
  templateUrl: './mi-boton.component.html',
  styleUrls: ['./mi-boton.component.css']
})
export class MiBotonComponent implements OnInit {
  
  @Input() texto: string = "Boton"
  @Output() pulsado = new EventEmitter<string>()
  
  
  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.pulsado.emit('Has pulsado')
  }
}
