import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { EventosService } from '../eventos.service';

interface JWTData{
  id: number,
  rol: string,
  nombre: string,
  lang: string,
  theme: string,
  iat: number
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  keyToken: string = 'jwt'

  constructor(private eventos: EventosService) { }


  getToken() : string | null{
    return localStorage.getItem(this.keyToken)
  }
  
  setToken(token: string): void{
    localStorage.setItem(this.keyToken, token)
    this.eventos.authEvent$.emit(true)
  }

  delToken(): void{
    localStorage.removeItem(this.keyToken)
    this.eventos.authEvent$.emit(false)
  }

  hasToken(): boolean{
    if(this.getToken() === null)
      return false;
    return true
  }

  getUserIdFromToken(): number{
    const token = this.getToken()
    if(token){
      const payload: JWTData = jwtDecode(token)
      return payload.id
    }
    return -1
  }
  

  getUserNameFromToken(): string{
    const token = this.getToken()
    if(token){
      const payload: JWTData = jwtDecode(token)
      return payload.nombre
    }
    return ''
  }
}
