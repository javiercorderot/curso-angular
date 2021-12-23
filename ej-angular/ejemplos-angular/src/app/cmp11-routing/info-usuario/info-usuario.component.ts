import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit, AfterViewInit {
  usuario: any = {}
  userId: string = ''
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.paramMap.subscribe((params) => {
      if(params.has('id')){
        this.userId = params.get('id')!
      }

      this.http.get(`http://localhost:3000/users/${this.userId}`)
      .subscribe((data: any) => {
        this.usuario = data
        console.log(this.usuario)
      })
    })


    
  }

  ngAfterViewInit(): void {
      
  }
}
