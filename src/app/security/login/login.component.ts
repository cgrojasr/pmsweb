import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from 'src/app/models/usuario-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent { 
  /**
   *
   */
  constructor(
    private router: Router
  ) {
  }

  usuarioLogin: UsuarioLogin = {
    usuario: '',
    password: ''
  }

  btnLogin_Click():void{
    this.router.navigateByUrl("management/home")
  }

  btnResetPassword_Click():void{
    this.router.navigateByUrl("security/resetpassword")
  }
}
