import {Component, Inject, OnInit} from '@angular/core';
import { TotalizadoresService } from "../totalizadores.service";
import {Totalizador} from "./totalizador";


@Component({
  selector: 'app-totalizadores',
  templateUrl: './totalizadores.component.html',
  styleUrls: ['./totalizadores.component.css']
})
export class TotalizadoresComponent implements OnInit {


  totalizadores: Totalizador[];
  constructor(@Inject(TotalizadoresService) private totalizadoresService: TotalizadoresService) {
    console.log("Constructor called!");
  }


  ngOnInit() {
    this.getTotalizadores();
  }


  getTotalizadores() {
    this.totalizadoresService.getTotalizadores().subscribe(totalizadores => this.totalizadores = totalizadores);
  }
}
