import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faCoffee = faCoffee;

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
  }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }

}
