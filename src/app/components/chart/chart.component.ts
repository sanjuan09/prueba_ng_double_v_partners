import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { Item } from 'src/app/interfaces/item';
import { NombresService } from 'src/app/services/nombres.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit,OnChanges {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  constructor(
    private nService: NombresService,
  ) { }

  @Input() nombres: Item[] = [];

  lineChartData: ChartDataset[] = [
    { data: [], label: "Seguidores"},
  ];

  lineChartLabels: any[] = [];

  lineChartOptions = { responsive: true };

  lineChartLegend = true;
  lineChartPlugins = [];

  

  ngOnInit(): void {

  }

  ngOnChanges(){
    this.userData();
    setTimeout(()=>{
      this.chart?.update();
    },300)
  }

  userData(){
    this.nombres.forEach(element => {
      this.nService.getUser(element.login).subscribe(data => {
        this.lineChartData[0].data.push(data.followers);
        this.lineChartLabels.push(data.name);
      }) 
    });

  }
}
