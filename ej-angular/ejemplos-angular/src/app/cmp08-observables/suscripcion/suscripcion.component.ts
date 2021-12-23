import { Component, Input, OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import { filter, fromEvent, interval, map, Observable, Subscriber, Subscription, take } from 'rxjs';
import { PagosService } from '../pagos.service';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit, AfterViewInit {
  @Input() plataforma: string = ''
  @Input() precio: number = 4.95
  activa: boolean = false
  fechaProximoPago: Date = new Date()
  suscripcionPlataforma: Subscription | null = null
  cancelarSuscripcion$ = new EventEmitter<boolean>()

  constructor(private pagosServices: PagosService) { }

  ngOnInit(): void {
  }

  getFechaProximoPago(): Date{
    const fecha = new Date()
    fecha.setSeconds(fecha.getSeconds() + 4)
    return fecha
  }

  activarSuscripcion(): void{
    const observableSub = new Observable((subscriber: Subscriber<any>) => {
      this.activa = true
      this.fechaProximoPago = this.getFechaProximoPago()
      const suscription = interval(4000)
      .subscribe(() => {
        if(this.pagosServices.pagarSuscripcion()){
          this.fechaProximoPago = this.getFechaProximoPago()
          subscriber.next('Te hemos cobrado' + this.precio)
        }
        else{
          this.activa = false
          subscriber.error('No te hemos podido cobrar la suscripción')
        }
        const suscripcionCancelar = this.cancelarSuscripcion$.subscribe(() => {
          this.activa = false
          suscription.unsubscribe()
          subscriber.complete()
          suscripcionCancelar.unsubscribe()
        })
      })
    })

    this.suscripcionPlataforma =  observableSub.subscribe({
      next: (msg) => {
        console.log(msg)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  cancelarSuscripcion(): void{
  //  this.suscripcionPlataforma?.unsubscribe
  //  this.activa = false
    this.cancelarSuscripcion$.emit(true)
  }

  ngAfterViewInit(): void {
    fromEvent(document, 'mousemove')
      .pipe(
        filter((event: any) => {
          const {clientX, clientY} = event
          return clientX > 400 && clientY < 300 ? true : false
        }),
        map((event: any) => {
          return{x: event.clientX, y: event.clientY}
        }),
        take(5)
      )
      .subscribe((event: IPosicionRaton) => {
        console.log('Estás moviendo el ratón')
      })
}


}

interface IPosicionRaton{
  x: number,
  y: number
}
