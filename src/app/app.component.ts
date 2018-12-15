import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'AppAngular';
  constructor() {}

  public miFuncion(valor1: number, valor2: number): number {
    return valor1 + valor2;
  }
}
