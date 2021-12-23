import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.component.html',
  styleUrls: ['./reproductor.component.css']
})
export class ReproductorComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  play(video: HTMLVideoElement): void{
    video.play()
  }

  pause(video: HTMLVideoElement): void{
    video.pause()
  }

  cambiarVolumen(video: HTMLVideoElement, event: any): void{
  //  console.log(event.target.value)
    video.volume = event.target.value / 100
  }



}
