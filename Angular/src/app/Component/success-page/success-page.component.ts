import { Component, OnInit } from '@angular/core';
import { User } from '../../Model/user';
import { UserService } from '../../Service/user.service';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {
  user:User;
  constructor(userService:UserService) { }

  ngOnInit() {
  }

}
