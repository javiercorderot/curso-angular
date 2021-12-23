import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  error(msg: string): void{
    console.error(`[ERROR] ${msg}`)
  }

  warn(msg: string): void{
    console.warn(`[WARN] ${msg}`)
  }
}
