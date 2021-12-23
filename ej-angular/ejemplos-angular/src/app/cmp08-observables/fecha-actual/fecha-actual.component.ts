import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-fecha-actual',
  templateUrl: './fecha-actual.component.html',
  styleUrls: ['./fecha-actual.component.css']
})
export class FechaActualComponent implements OnInit, OnDestroy {
  fecha: Date = new Date()
  suscripcion: Subscription | null = null

  constructor() { }

  ngOnInit(): void {
  const observableFecha: Observable<number> =  interval(1000)
  this.suscripcion = observableFecha
      .subscribe((n: number) => {
        console.log(n)
        this.fecha = new Date()
      })
  }

  ngOnDestroy(): void {
    this.suscripcion?.unsubscribe()
  } 

   

}
