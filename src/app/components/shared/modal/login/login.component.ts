import { Component, OnInit } from '@angular/core';
import {NzModalRef} from 'ng-zorro-antd';
import {Login} from '../../../../model/login';
import {LoginService} from '../../../../services/login.service';
import {AuthService} from '../../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  login: Login = {code: null, password: null, getToken: true}

  constructor(

    private modal: NzModalRef,
    private LoginService: LoginService,
    private authService: AuthService,
    private route: Router,

  ) { }

  ngOnInit(): void {
  }

  cancelar()
  {
    this.modal.destroy();
  }

  form(){
    alert('Sus Datos Estan siendo Verificados por favor intente mas tarde');
    console.log('Datos enviados')
    console.log(this.login );
    localStorage.setItem('userL',JSON.stringify(this.login));
    this.datoslogin(this.login);
  }

  datoslogin(lo){
    this.LoginService.login(lo).subscribe((Token)  =>{
      console.log('respuesta del servidor')
      console.log(Token);
      let token = Token['data'];
      console.log('Token de la variable')
      console.log(token);
      if(token['status']=='success'){
        console.log('entro al if')
        setTimeout(()=>{
          this.route.navigate(['/admin']);
        }, 500);
        this.authService.Header(token['data'])
        //this.authService.state = true;
        localStorage.setItem('token',JSON.stringify(token['data']));
      }
    }, error => {
      console.log('Error en los datos')
      console.log(error)
    });
  }



}
