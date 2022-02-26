import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service:UserService,private router:Router) { }

  ngOnInit() {
  }
  onLogout(){
    localStorage.removeItem('token');
    this.router.navigate(['/homedc']);
  }

}
