import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newApp';
  name = 'laury';


  changeTitle(){
    this.title = 'cambio title'
  }
}
