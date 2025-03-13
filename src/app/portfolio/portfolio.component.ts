import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
isHidden:boolean=true;
modelImg:string="";
imageSrc:string[]=[
  '/images/poert1.png',
  '/images/port2.png',
  '/images/port3.png',
  '/images/port3.png',
  '/images/poert1.png',
  '/images/port2.png'
]

hideModel(eletarget:EventTarget|null,imgRef:HTMLImageElement):void{
  if(eletarget===imgRef){
return;
  }
  else{
    this.isHidden=true;
  }
}
}
