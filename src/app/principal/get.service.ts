import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  urlDog = 'https://rickandmortyapi.com/api/character'
  urlCachorro = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key='
  urlNasa = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key='
  chaveApi='A5NdeGiILZZI4ueaDM0T16A4Yg9BJHPdwMV5hqM4'  
  timeStamp = new Date().getTime()
  constructor(private http: HttpClient) { }
  
  getDog():Observable<any>{
    return this.http.get<any>(this.urlDog)
  }
  getCachorro(): Observable<any>{
    return this.http.get<any>(this.urlCachorro+`${this.chaveApi}` )
  }
  getNasa(): Observable<any>{
    return this.http.get<any>(this.urlNasa+`${this.chaveApi}&page=12`)
  }
  getNasa2(): Observable<any>{
    return this.http.get<any>(this.urlNasa+`${this.chaveApi}&page=1`)
  }
  getNasa3(): Observable<any>{
    return this.http.get<any>(this.urlNasa+`${this.chaveApi}&page=22`)
  }
}
