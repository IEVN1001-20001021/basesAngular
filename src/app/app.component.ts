import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular';

  duplicarNumero(X: number): number {
    return X * 2;
  }

  alumnos = {
    matricula: 123456,
    nombre: 'Juan',
    fechaInscrito: new Date(),
    pago: 2220,
  }
}
