import {Component, Inject, OnInit} from '@angular/core';
import { TotalizadoresService } from "../totalizadores.service";
import {Totalizador} from "./totalizador";


@Component({
  selector: 'app-totalizadores',
  templateUrl: './totalizadores.component.html',
  styleUrls: ['./totalizadores.component.css']
})
export class TotalizadoresComponent implements OnInit {

  readonly colors = [
    'darkblue',
    'blue',
    'green',
    'orange'
  ];

  totalizadores: Totalizador[];
  constructor(@Inject(TotalizadoresService) private totalizadoresService: TotalizadoresService) {
  }


  ngOnInit() {
    this.getTotalizadores();
  }


  getTotalizadores() {
    this.totalizadoresService.getTotalizadores().subscribe(totalizadores => this.totalizadores = totalizadores);
  }

  getCor(index: number): string {
    while (index > this.colors.length) {
      index -= this.colors.length;
      index = Math.abs(index);
    }

    return this.colors[index];

  }
}
