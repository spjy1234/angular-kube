import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AllService, TestAllService, Users} from "./user/users";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  userUrl: string = "http://localhost:3000/api/user"
  constructor(private http: HttpClient) { }
  getUser(){
    return this.http.get<AllService>(this.userUrl)
  }
  getUserById(id: string){
    return this.http.get<TestAllService>(this.userUrl + "/" + id)
  }
  postUser(user: Users){
    return this.http.post<Users>(this.userUrl, user)
  }
  deleteUser(id: string){
    return this.http.delete(this.userUrl + "/" + id)
  }
  updateUser(id: string, user: Users){
    return this.http.put(this.userUrl + "/" + id, user)
  }
}
