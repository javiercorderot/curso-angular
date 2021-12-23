import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IIdNuevaTarea, IObjetosTarea } from '../interfaces';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  url: string =  environment.urlFirebaseTareas

  constructor(private http: HttpClient) { }

  getTareas(): Observable<Array<Tarea>>{
    return this.http.get<IObjetosTarea>(`${this.url}.json`)
      .pipe(
        map((tareas: IObjetosTarea) => {
          const arrTareas: Array<Tarea> = []

          for(let id in tareas){
            const tarea = new Tarea(tareas[id].titulo, tareas[id].completada, id)
            arrTareas.push(tarea)
          }

          return arrTareas
        })
      )
  }

  createTareas(tarea: Tarea): Observable<IIdNuevaTarea>{
    return this.http.post<IIdNuevaTarea>(`${this.url}.json`, tarea)
  }


  updateTarea(tarea: Tarea): Observable<any>{
    const idTarea = tarea.id
    const datosACambiar = {... tarea}
    delete datosACambiar.id
    return this.http.put(`${this.url}/${idTarea}.json`, datosACambiar)
  }

  deleteTarea(tarea: Tarea): Observable<null>{
    return this.http.delete<null>(`${this.url}/${tarea.id}.json`)
  }

  completeTarea(tarea: Tarea): Observable<any>{
    const datosACambiar = {completada: !tarea.completada}
    return this.http.patch(`${this.url}/${tarea.id}.json`, datosACambiar)
  }

  
}
