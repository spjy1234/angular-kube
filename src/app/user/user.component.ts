import {Component, OnInit} from '@angular/core';
import {Users} from "./users";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  users: Users[] | undefined = []
  ngOnInit() {
    this.apiService.getUser().subscribe(data => {
      this.users = data.data
    })
  }
  constructor(private apiService: ApiService) {
  }
}
