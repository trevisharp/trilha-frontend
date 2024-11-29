import { Component, EventEmitter, Output } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [LoginComponent, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = "";
  senha: string = "";
  repetirSenha: string = "";
  edv: string = "";

  @Output()
  onRegisterDataChanged = new EventEmitter<any>();

  reciveData(obj: { email: string, senha: string }) {
    this.email = obj.email;
    this.senha = obj.email;
  }
}
