import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public API: String;

  headers: HttpHeaders;
  TOKEN: any;

  state:boolean



  HEADER: HttpHeaders;



  constructor(
    private  httpclient: HttpClient,
  ) {

    this.header();
    this.API = environment.API;

    this.HEADER = new HttpHeaders({
      'Autorization': this.TOKEN
    })
  }

  token()
  {
    let  token = JSON.parse(localStorage.getItem('token'))
    if(token)
    {
      this.state = true;
      return token;
      console.log('token aqui')
    }
  }


  header(){
    this.TOKEN = this.token();
    if (this.TOKEN){
      this.headers = new  HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':this.TOKEN
      });
    }else{
      this.headers = new  HttpHeaders({
        'Content-Type':'application/json'
      });
    }
    return this.headers;
  }



  Header(token){
    this.headers = new  HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':this.TOKEN
    });
  }

}
