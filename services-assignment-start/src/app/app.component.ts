import { Component } from '@angular/core';
import {UsersService} from "./users.service";
import {CounterService} from "./counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];


  constructor(private usersService: UsersService , private counterService: CounterService) {}
}
