import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IIdNuevaTarea } from './interfaces';
import { Tarea } from './models/tarea';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-cmp09-http',
  templateUrl: './cmp09-http.component.html',
  styleUrls: ['./cmp09-http.component.css']
})
export class Cmp09HttpComponent implements OnInit {
  listaTareas: Tarea[] = []
  formEditar: FormGroup

  constructor(private tareasService: TareasService ) {
    this.formEditar = new FormGroup({
      id: new FormControl('', Validators.required),
      titulo: new FormControl('', Validators.required),
      completada: new FormControl(false)
    })
   }

  ngOnInit(): void {
    this.getTareas()
  }

  guardar(): void{
    const tarea = {
      titulo: 'One Piece',
      completada: false
    }

    this.tareasService.createTareas(tarea)
      .subscribe((datos: IIdNuevaTarea) => {
          console.log(datos)
          this.getTareas()
      })
  }


  getTareas(): void{
    this.tareasService.getTareas()
    .subscribe((datos: Array<Tarea>) => {
      this.listaTareas = datos
      console.log(datos)
    })
  }

  completar(tarea: Tarea): void{
    this.tareasService.completeTarea(tarea)
      .subscribe((datos: any)=> {
        this.getTareas()
        // tarea.completada = datos.completada
      })
  }

  eliminar(tarea: Tarea): void{
    this.tareasService.deleteTarea(tarea)
      .subscribe(() => {
        this.listaTareas =  this.listaTareas.filter((t: Tarea) => {
          if(tarea.id !== t.id)
            return true
          return false
        })
      })
  }

  actualizar(){
    const idTareaEditada = this.formEditar.value.id
    this.tareasService.updateTarea(this.formEditar.value)
      .subscribe((datos) => {
      //  this.getTareas()
        let tarea = this.listaTareas.find(t => t.id === idTareaEditada)
        Object.assign(tarea, datos)
      })
  }


  rellenarFormulario(tarea: Tarea): void{
    this.formEditar.setValue({... tarea})
  }
}
