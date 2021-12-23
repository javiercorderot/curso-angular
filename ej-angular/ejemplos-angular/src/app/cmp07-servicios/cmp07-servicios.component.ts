import { Component, OnInit } from '@angular/core';
import { LoggerService } from './servicios/logger.service';

@Component({
  selector: 'app-cmp07-servicios',
  templateUrl: './cmp07-servicios.component.html',
  styleUrls: ['./cmp07-servicios.component.css']
})
export class Cmp07ServiciosComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit(): void {
  }

  mostrarError(msg: string):void{
    this.logger.error(msg)
  }

  mostrarWarning(msg: string):void{
    this.logger.warn(msg) 
  }

}
