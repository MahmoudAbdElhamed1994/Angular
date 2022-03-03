import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Iuser } from '../shared Classes and types/Shared';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:Iuser[];
  constructor(private userservice:UsersService) { 
    this.users=[];
  }

  ngOnInit(): void {
    this.userservice.getUsers().subscribe(
      data =>{
        this.users=data;
      }
    )
  }

}
