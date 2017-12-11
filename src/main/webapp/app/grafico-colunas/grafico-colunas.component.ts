import {Component, Input, OnInit} from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'grafico-colunas',
  templateUrl: './grafico-colunas.component.html',
  styleUrls: ['./grafico-colunas.component.css']
})
export class GraficoColunasComponent implements OnInit {

  chart : Chart;
  @Input() nome: string;

  constructor() { }

  ngOnInit() {

  }

  carregarGrafico(categorias: string[], dados: any[]) {
    this.chart = new Chart({
      chart: {
        type: 'column',
        width: 824,
        height: 250,
        backgroundColor: '#32373a'
      },
      title: {
        text: ''
      },
      plotOptions: {
        column: {
          color: '#2b908f',
          depth: 25,
          borderWidth: 0
        }
      },
      xAxis: {
        categories: categorias,
        labels: {
          style: {
            color: '#ffffff'
          }
        },
        lineColor: '#707073',
        tickColor: '#707073'
      },
      yAxis: {
        title: {
          text: null
        },
        labels: {
          style: {
            color: '#ffffff'
          }
        },
        gridLineColor: '#707073'
      },
      series: [{
        name: this.nome,
        data: dados
      }]
    });
  }

}
