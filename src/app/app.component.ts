import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  userdetail = [
    {name:'bajwa', email:'bajw@gmail.com'},
    {name:'japan', email:'japan@gmail.com'},
    {name:'zayan', email: 'zayan@gmail.com'},
    {name:'navergiver', email:'navergaver@gmail.com'}
  ]
}
