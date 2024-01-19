import { Component } from '@angular/core';

import { User } from '../User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  user: User = new User("","","","");

  onSubmit(){
    console.log("User", this.user);
    
  }
}
