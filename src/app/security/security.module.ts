import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security.component';
import { LoginComponent } from './login/login.component';
import { SecurityRoutingModule } from './security-routing.module';
import { FormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent,
    ResetPasswordComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule
  ]
})
export class SecurityModule { }
