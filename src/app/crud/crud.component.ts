import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Users} from "../user/users";
import {lastValueFrom, map, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit, OnDestroy{
  subcribe: Subscription = new Subscription()
  users: Users[] | undefined = []

  postForm: FormGroup = this.fb.group({
    Username: ['test', [Validators.required]],
    Email: ['testEmail12@test.com', [Validators.required, Validators.email]],
    Password: ['testPassword', [Validators.required]],
  })
  postUser(){
    const user: Users =this.postForm.value
    this.subcribe = this.apiService.postUser(user).subscribe(
    )
    alert("유저가 등록되었습니다.")
  }


  constructor(private apiService: ApiService, private fb: FormBuilder){

  }


  ngOnInit(){
    this.subcribe = this.apiService.getUser().subscribe(data => {
      this.users = data.data
    })
  }
  ngOnDestroy() {
    this.subcribe.unsubscribe()
  }
}
