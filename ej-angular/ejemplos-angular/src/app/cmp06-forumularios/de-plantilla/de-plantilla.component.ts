import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-de-plantilla',
  templateUrl: './de-plantilla.component.html',
  styleUrls: ['./de-plantilla.component.css']
})
export class DePlantillaComponent implements OnInit {

  datosFormulario: any = {
    username: '',
    email: 'ems',
    password: 'paswasaf'
  }

  constructor() { }

  ngOnInit(): void {
    console.log()
  }


  registro(form: NgForm){
    console.log(form.value)
  }
}
