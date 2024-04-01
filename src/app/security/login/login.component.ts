import { Component } from '@angular/core';
import { UsuarioLogin } from 'src/app/models/usuario-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent { 
  usuarioLogin: UsuarioLogin = {
    usuario: '',
    password: ''
  }
}
