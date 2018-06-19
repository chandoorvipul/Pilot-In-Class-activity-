import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;
  constructor(private dataService: DataService, private router: Router) { }
  ngOnInit() { }
  onLogin({ value, valid }: { value: any, valid: boolean }) {
    console.log(value)
    console.log(valid)
    if (valid) {
      this.dataService.signInUser(value)
        .subscribe((data) => {
          console.log(data)
          console.log("success")
          this.router.navigate(['/users'])
        },
        error => {
          console.log("Error Occured")
          alert("Invalid EmailId/Password")
        });
    }
    else {
      alert("Please enter both Email and Password")
    }
  }
}
