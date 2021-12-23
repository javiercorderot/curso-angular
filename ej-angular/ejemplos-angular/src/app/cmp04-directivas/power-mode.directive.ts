import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appPowerMode]'
})
export class PowerModeDirective {

  constructor() { }

  @HostBinding('style.color') color: string = 'red'
  @HostBinding('style.transform') transform: string = 'translate(0, 0)'


  @HostListener('input') onInput (){
    this.color = this.generarColorAleatorio()
    this.transform = this.moverInput(10,10)
    setTimeout(() => {
      this.transform = this.moverInput(0,0)
    }, 100); 
  }

  generarNumeroAleatorio(numero: number){
    return (Math.random()*numero).toFixed(0);
  }
  
  generarColorAleatorio(){
    return 'rgb' + '('+this.generarNumeroAleatorio(255)+',' + this.generarNumeroAleatorio(255) + ',' + this.generarNumeroAleatorio(255) +')';
  }

  moverInput(num1: number, num2: number){
    return 'translate(' + num1 +'px, '+ num2 +'px)'
  }

}
