import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreService } from '../shared/offre.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {

  constructor(public service: OffreService,private router:Router) { }
  myplats;
  public response: {dbPath: ''};
  

  ngOnInit() {
  }
  onSubmit() {
    this.service.PostOffres().subscribe(
      (res: any) => {
        
          this.myplats = res;
          this.service.formModel.reset();
          //this.toastr.success('New user created!', 'Registration successful.');
      },
          err => {
            console.log(err);
          }
        
      
      
    );
  }

}
