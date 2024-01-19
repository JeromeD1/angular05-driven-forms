import { Component } from '@angular/core';

import { Order } from '../Order';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrl: './my-form.component.scss'
})
export class MyFormComponent {

  model: Order = new Order("", 0, new Date(), "")

  onSubmit() :void {
    console.log(this.model);
    
  }

  onReset() :void {
    this.model.title="";
    this.model.date=new Date();
    this.model.quantity=0;
    this.model.contact="";

    console.log(this.model);

  }
}
