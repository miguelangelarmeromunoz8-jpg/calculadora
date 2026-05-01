import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnChanges {
  @Input() expresion: string = '';
  @Input() resultado: string = '0';

  ngOnChanges() {
    console.log('Display actualizado:', this.expresion, this.resultado);
  }
}