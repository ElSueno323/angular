import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onIntervalFired(fired : number){
    if(fired % 2 === 0){
      this.evenNumbers.push(fired);
    }else {
      this.oddNumbers.push(fired);
    }
  }
}
