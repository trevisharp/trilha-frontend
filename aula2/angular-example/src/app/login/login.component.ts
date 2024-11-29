import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Output()
  onInfoChanged = new EventEmitter<{ email: string, senha: string }>();

  email: string = "";
  senha: string = "";

  onValueChange() {
    this.onInfoChanged.emit({
      email: this.email,
      senha: this.senha
    })
  }
}
