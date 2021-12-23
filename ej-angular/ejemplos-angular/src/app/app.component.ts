import { Component } from '@angular/core';
import { EventosService } from './cmp07-servicios/eventos.service';
import { AuthService } from './cmp07-servicios/servicios/auth.service';
import { AutenticacionService } from './cmp10-autenticacion/autenticacion.service';
import jwtDecode from 'jwt-decode'
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplos-angular';
  isLoggedIn: boolean = false;
  formLogin: FormGroup

  constructor (private auth: AuthService, private eventos: EventosService, private autenticacion: AutenticacionService){
    this.formLogin = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(){
    this.isLoggedIn = this.auth.hasToken()
    this.eventos.authEvent$.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn
    })
    this.eventos.authEvent$.emit(this.auth.hasToken())
  }

  login(): void{
    const datosLogin = this.formLogin.value
    this.autenticacion.login(datosLogin)
      .subscribe({
        next: (data) =>{
          const token = data.token

          const payload = jwtDecode(token)
          console.log(payload)
  
          this.auth.setToken(token)
          this.formLogin.reset()
        },
        error: (err) => {
          alert(err.error.msg)
        }       
      })
      

  }

  
  logout(): void{
    this.auth.delToken()
  }
}
