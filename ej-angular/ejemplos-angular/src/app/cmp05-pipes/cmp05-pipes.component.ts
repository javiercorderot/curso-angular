import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp05-pipes',
  templateUrl: './cmp05-pipes.component.html',
  styleUrls: ['./cmp05-pipes.component.css']
})
export class Cmp05PipesComponent implements OnInit {

  producto: any = {
    titulo: 'one plus 9',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?',
    precio: 800,
    fechaLanzamiento: new Date()
  }


  tareas: Array<string> = ['tarea 1', 'tarea 2', 'tarea 3']

  filtro: string = ''

  datosPost1 = fetch('https://jsonplaceholder.typicode.com/posts/1').then((resp) => {
    return resp.json()
  })

  constructor() { }

  ngOnInit(): void {
  }


  addTarea(event: any){
  //  this.tareas.push(event.target.value)
  this.tareas = [...this.tareas, event.target.value]
  }



}
