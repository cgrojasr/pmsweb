import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ColaboradorAutenticar, ColaboradorToken } from 'src/app/models/colaborador-model';
import { UsuarioLogin } from 'src/app/models/usuario-model';
import { ColaboradorService } from 'src/app/services/colaborador/colaborador.service';

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
    private router: Router,
    private cookie: CookieService,
    private colaboradorService: ColaboradorService
  ) {
  }

  usuario: ColaboradorAutenticar = {
    correo: '',
    contrasena: ''
  }

  btnLogin_Click():void{
    this.colaboradorService.Autenticar(this.usuario).subscribe(
      token=>{
        this.cookie.set('token', JSON.stringify(token))
        this.router.navigateByUrl("management/home")
      }
    )
  }

  btnResetPassword_Click():void{
    this.router.navigateByUrl("security/resetpassword")
  }
}
