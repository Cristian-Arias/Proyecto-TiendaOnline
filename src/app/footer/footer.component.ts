import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls:['./footer.Component.css']
})
export class FooterComponent {
  public autor: any = {nombre:'La', apellido: 'Relojeria'};
}
