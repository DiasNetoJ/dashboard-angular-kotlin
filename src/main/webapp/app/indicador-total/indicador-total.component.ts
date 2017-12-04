import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'indicador-total',
  templateUrl: './indicador-total.component.html',
  styleUrls: ['./indicador-total.component.css']
})
export class IndicadorTotalComponent implements OnInit {

  @Input() titulo = "";
  @Input() cor = "darkblue";

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    switch (this.cor) {
      case "blue": return '#2196F3';
      case "green": return '#4CAF50';
      case "orange": return '#FFC107';
      default: return '#3F51B5';
    }
  }

}
