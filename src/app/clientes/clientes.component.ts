import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'

})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [

    {id: 1, nombre:'Carolina', apellido: 'Zuluaga', email: 'carolina_za@corhuila.edu.co', createAt: '2020-05-14' },
    {id: 2, nombre:'Daniela', apellido: 'Neira', email: 'daniela_na@corhuila.edu.co', createAt: '2020-05-14' },
    {id: 1, nombre:'Katherine', apellido: 'Hernandez', email: 'ingridhernandez_20182@corhuila.edu.co', createAt: '2020-05-14' },
    {id: 1, nombre:'Cristian', apellido: 'Arias', email: 'cristian_an@corhuila.edu.co', createAt: '2020-05-14' }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
