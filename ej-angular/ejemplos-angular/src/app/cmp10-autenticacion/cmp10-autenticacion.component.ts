import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { socket } from 'src/main';
import { AuthService } from '../cmp07-servicios/servicios/auth.service';

@Component({
  selector: 'app-cmp10-autenticacion',
  templateUrl: './cmp10-autenticacion.component.html',
  styleUrls: ['./cmp10-autenticacion.component.css']
})
export class Cmp10AutenticacionComponent implements OnInit {
  formNoticia: FormGroup
  noticias: Array<any> = []

  constructor(private http: HttpClient, private authService: AuthService, private ngZone: NgZone) { 
    this.formNoticia = new FormGroup({
      titulo: new FormControl(''),
      contenido: new FormControl(''),
    })
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3200/noticias')
      .subscribe((data: any) => {
        this.noticias = data
      })

    this.ngZone.run(() => {
      socket.on('nuevaNoticia', (nuevaNoticia) => {
        this.noticias.push(nuevaNoticia)
      })
    })  
  }

  guardarNoticia(): void{
    const noticia = {... this.formNoticia.value}
    noticia.userId = this.authService.getUserIdFromToken() 
    console.log(noticia)

    this.http.post('http://localhost:3200/noticias', noticia)
      .subscribe((nuevaNoticia: any) => {
        console.log(noticia)
       // alert('La noticia se ha publicado correctamente')
        this.formNoticia.reset()
      })
  }


}
