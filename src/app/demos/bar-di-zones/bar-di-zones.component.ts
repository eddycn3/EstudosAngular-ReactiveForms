import { Component, OnInit } from '@angular/core';
import { BarDiZonesService } from './bar-di-zones.service';

@Component({
  selector: 'app-bar-di-zones',
  templateUrl: './bar-di-zones.component.html',
  providers: [
    { provide: BarDiZonesService, useClass: BarDiZonesService}
  ]
})
export class BarDiZonesComponent implements OnInit {

  barBebida: string;

  constructor(private barService: BarDiZonesService) { }

  ngOnInit() :void{
    this.barBebida = this.barService.obterBebidas();
  }

}
