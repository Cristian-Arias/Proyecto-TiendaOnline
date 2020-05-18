import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenido a Angular';

  curso: string = 'Curso Diseño de Sistemas 2020';
  profesor: string = 'Didier Restrepo';
}
