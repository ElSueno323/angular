import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ok = false
  array=[]
  changeOk(){
    this.ok=! this.ok
    //this.array.push(this.array.length+1)
    this.array.push(new Date())
  }
}
