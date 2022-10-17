import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, { Pagination, Navigation } from "swiper";
import { GetService } from './get.service';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PrincipalComponent implements OnInit {
  resposta: any
  resultado: any
  nasa : any
  nasa2: any
  nasa3: any
  constructor(private get:GetService) { }

  ngOnInit(): void {
    this.getDog()
    this.getCachorro()
    this.getNasa()
    this.getNasa2()
    this.getNasa3()
  }
getDog(){
  this.get.getDog().subscribe(
    res =>{
      this.resposta = res["results"]
    }
  )
}
  
getCachorro(){
  this.get.getCachorro().subscribe(
    resultadoDog =>{
      this.resultado = resultadoDog.photos
      
    }
  )
}
getNasa(){
  this.get.getNasa().subscribe(
    resultadoNasa =>{
      this.nasa = resultadoNasa.photos
    }
  )
}
getNasa2(){
  this.get.getNasa2().subscribe(
    resultadoNasa2 =>{
      this.nasa2 = resultadoNasa2.photos
    }
  )
}
getNasa3(){
  this.get.getNasa3().subscribe(
    resultadoNasa2 =>{
      this.nasa3 = resultadoNasa2.photos
    }
  )
}
}