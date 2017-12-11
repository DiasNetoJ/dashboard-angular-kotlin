import {Component, Input, OnInit} from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'grafico-pizza',
  templateUrl: './grafico-pizza.component.html',
  styleUrls: ['./grafico-pizza.component.css']
})
export class GraficoPizzaComponent implements OnInit {

  chart : Chart;
  @Input() nome: string;

  constructor() { }

  ngOnInit() {
  }

  carregarGrafico(dados: any[]) {
    console.log('Aquecendo pizza: ' + dados);
    this.chart = new Chart({
      chart: {
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        },
        type: 'pie',
        height: 200,
        backgroundColor: '#32373a'
      },
      title: {
        text: ''
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '{point.name}',
            color: '#ffffff'
          },
          colors: ['#2b908f', '#90ee7e']
        }
      },
      series: [{
        type: 'pie',
        name: this.nome,
        data: dados
      }]
    });
    console.log(this.chart);
  }

}
