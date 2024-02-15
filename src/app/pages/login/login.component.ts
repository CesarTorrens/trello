import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BtnComponent } from '../../components/btn/btn.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, BtnComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {

}
