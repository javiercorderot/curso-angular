import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit, OnChanges {

  @Input() errores: ValidationErrors | null = {}
  mensajesErrores: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.mensajesErrores = []

    for (const key in this.errores) {
      if(key === 'required')
        this.mensajesErrores.push('El campo es obligatorio')
      if(key === 'minlength'){
        const error = this.errores[key]
        this.mensajesErrores.push(`Te fatan ${error.requiredLength - error.actualLength} caracteres de ${error.requiredLength}`)
      }
      if(key == 'pattern'){
        const error = this.errores[key]
        this.mensajesErrores.push(`El ${error.actualValue} no cumple con el siguiente patrón: ${error.requiredPattern}`)
      }
      if(key == 'esStark'){
        const error = this.errores[key]
        this.mensajesErrores.push(`El nombre '${error.nombreActual}' no un Stark como los siguientes: ${error.nombresValidos}`)
      }
      if(key == 'esPwSegura'){
        const error = this.errores[key]
        if(!error.simbolos){
          this.mensajesErrores.push('La contraseña debe incluir algún símbolo') 
        }
        if(!error.mayusculas){
          this.mensajesErrores.push('La contraseña debe incluir alguna mayúscula')
        }
      }
      if(key == 'confirmarPassword'){
        this.mensajesErrores.push('Las contraseñas no coinciden')
      }
    }
    console.log(this.errores)  
  }

}
