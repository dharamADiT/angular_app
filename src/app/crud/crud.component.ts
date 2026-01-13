import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name: string;
}
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {

  msg: string = ""
  users: User[] = []
  constructor(private router:Router){}
  CreateHandler(val: any) {
    if (val.value.trim() == "") {
      this.msg = "* please fill the user Name"
    }
    else {
      this.users.push({
        name: val.value
      })
      val.value = ""
    }

    if(this.users.length>3){
    this.router.navigate(['login'])
    }

  }
  DeleteHandler(i: number) {
    this.users.splice(i, 1)
  }
}
