import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-main',
  imports: [LoginComponent, RegisterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
onLoginDataChanged() {
throw new Error('Method not implemented.');
}
  inLogin: boolean = true;

}
