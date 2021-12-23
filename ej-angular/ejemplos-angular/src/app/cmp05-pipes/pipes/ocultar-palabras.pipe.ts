import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultarPalabras'
})
export class OcultarPalabrasPipe implements PipeTransform {

  transform(value: string, palabra: string): string {
    const wordSize = palabra.length;

    const arrayEntrada = value.split(' ')
    const arrayModificado = arrayEntrada.map(palab => {
      if(palab == palabra)
        return ('*').repeat(wordSize)
      return palab;
      });

    return arrayModificado.join(' ')
  }

}
