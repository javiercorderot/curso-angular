import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

function esUnStark(formControl: AbstractControl): ValidationErrors | null{
    const nombresStark = ['robb', 'arya', 'sansa', 'tony', 'rickon', 'bran', 'nedd']

    if(!nombresStark.includes(formControl.value.toLowerCase())){
        return {
            esStark: {
                nombresValidos: nombresStark,
                nombreActual: formControl.value
            }
        }   
    }
    return null
}

interface IOpcionesPassword{
    mayus?: boolean
    simbolos?: boolean
}

function esPasswordSegura(opciones: IOpcionesPassword): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
       let hayMayusculas: boolean = true
       let haySimbolos: boolean = true

       if(opciones.mayus){
            hayMayusculas = control.value.toLowerCase() !== control.value
       }

       if(opciones.simbolos){
           haySimbolos = new RegExp('\\W').test(control.value)
       }

       const objError = {
           esPwSegura:{
               mayusculas: hayMayusculas,
               simbolos: haySimbolos
           }
       }
    
       return hayMayusculas && haySimbolos ? null : objError
    }
}


function passwordRepetirValida(control: AbstractControl): ValidationErrors | null{
    const formulario = control.parent
    const password = formulario?.value.password

    const confirmarPassword = control.value

    if(password !== confirmarPassword){
        return {
            confirmarPassword: true
        }
    }

    return null
}



export default{
    esUnStark,
    esPasswordSegura,
    passwordRepetirValida
}