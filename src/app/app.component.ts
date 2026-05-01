import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
styleUrls: ['./app.component.scss']
})
export class AppComponent {
  expresion: string = '';
  resultado: string = '0';

  manejarBoton(valor: string) {
    if (valor === 'C') {
      this.expresion = '';
      this.resultado = '0';
    } else if (valor === '=') {
      try {
        this.resultado = eval(this.expresion).toString();
        this.expresion = this.resultado;
      } catch {
        this.resultado = 'Error';
        this.expresion = '';
      }
    } else {
      this.expresion += valor;
      this.resultado = this.expresion;
    }
  }
}