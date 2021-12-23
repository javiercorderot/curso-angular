import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import CustomValidators from '../custom-validators'


@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css']
})
export class ReactivoComponent implements OnInit {

  formulario: FormGroup;

  get erroresUsername():  ValidationErrors | null{
    return this.formulario.controls['username'].errors
  }

  get erroresEmail():  ValidationErrors | null{
    return this.formulario.controls['email'].errors
  }

  get erroresPassword():  ValidationErrors | null{
    return this.formulario.controls['password'].errors
  }


  constructor(private formBuilder: FormBuilder) {

    this.formulario = formBuilder.group({
      username: formBuilder.control('', [Validators.required, Validators.minLength(4), CustomValidators.esUnStark]),
      email: formBuilder.control('a@am.com', [Validators.required, Validators.pattern(/[a-z]+@[a-z]+\.[a-z]{2,3}/)]),
      password: formBuilder.control('', [Validators.required, Validators.minLength(7), CustomValidators.esPasswordSegura({mayus: true, simbolos: true})]),
      confirmarPassword: formBuilder.control('', [CustomValidators.passwordRepetirValida])
    })

/* SIN FORM BUILDER
    this.formulario = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      email: new FormControl('a@am.com', [Validators.required, Validators.pattern(/[a-z]+@[a-z]+\.[a-z]{2,3}/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(7)])
    })
*/
 }

  ngOnInit(): void {
  }

  registro(){
    console.log(this.formulario.value)
  }

}
