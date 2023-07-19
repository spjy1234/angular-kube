import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiService} from "../../api.service";
import {AllService, Users} from "../../user/users";
import {map, Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-delete-update',
  templateUrl: './delete-update.component.html',
  styleUrls: ['./delete-update.component.scss']
})
export class DeleteUpdateComponent implements OnInit, OnDestroy{
  user$: Observable<Users> | undefined;
  getId: string;
  subscribe: Subscription = new Subscription()
  constructor(private apiService: ApiService, private route: ActivatedRoute, private fb: FormBuilder) {
    this.getId = this.route.snapshot.paramMap.get("id")!
  }
  ngOnInit() {
    this.user$ = this.apiService.getUserById(this.getId).pipe(
      map(data => data.data)
    )
  }
  ngOnDestroy() {
    this.subscribe.unsubscribe()
  }

  deleteUser(id: string){
    console.log(id)
    this.subscribe = this.apiService.deleteUser(id).subscribe()
    alert(`${id}가 삭제되었습니다.`)
  }


  updateUser(data: any, id: string){
    console.log(id, data.value)
    this.subscribe = this.apiService.updateUser(id, data.value).subscribe()
    alert(`${id}가 수정되었습니다.`)
  }
}
