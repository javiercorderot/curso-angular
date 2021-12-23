import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-cmp08-observables',
  templateUrl: './cmp08-observables.component.html',
  styleUrls: ['./cmp08-observables.component.css']
})
export class Cmp08ObservablesComponent implements OnInit {

  mostrarHora: boolean = true
  constructor() { }

  ngOnInit(): void {
    /*
    const miObservable = new Observable((suscriber: Subscriber<string>) => {
      suscriber.next('Mensaje 1')
      setTimeout(() => {
        suscriber.next('Mensaje 2')
      }, 3000);
      setTimeout(() => {
        suscriber.complete()
      }, 6000);
    })

    miObservable.subscribe( {
     next: (msg: string) => {
       console.log(msg)
     },
     error: (err) => {
       console.log('Hay un error', err)
     },
     complete: () => {
       console.log('Ya no vamos a enviar más mensajes')
     }
    })
    */
  }

  toggleMostrarHora(){
    this.mostrarHora = !this.mostrarHora
  }

}
