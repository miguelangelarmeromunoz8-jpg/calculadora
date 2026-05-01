import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent {
  @Output() botonPresionado = new EventEmitter<string>();

  botones: string[] = [
    'C', '/', '*', '-',
    '7', '8', '9', '+',
    '4', '5', '6', '=',
    '1', '2', '3', '0',
    '.', ''
  ];

  presionar(valor: string) {
    if (valor !== '') {
      this.botonPresionado.emit(valor);
    }
  }
}