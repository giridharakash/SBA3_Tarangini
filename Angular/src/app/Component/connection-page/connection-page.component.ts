import { Component, OnInit } from '@angular/core';
import { User } from '../../Model/user';
import { UserService } from '../../Service/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-connection-page',
  templateUrl: './connection-page.component.html',
  styleUrls: ['./connection-page.component.css']
})
export class ConnectionPageComponent implements OnInit {
  user:User;

  constructor( private userService:UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = new User();
  }

  save(){
    this.userService.addUser(this.user).subscribe(
      (data) => {
        this.user = data;
        alert("Successfully Added");
        this.router.navigateByUrl("/addedUser");
      },
      (error) => {
        alert("Already registered. Please contact customer care executives")
      }

    );

  }

}
