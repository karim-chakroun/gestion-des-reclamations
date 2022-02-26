
import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, OnInit } from '@angular/core';
import { OffreService } from '../shared/offre.service';
import { CandidatureService } from '../shared/candidature.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-show-offre',
  templateUrl: './show-offre.component.html',
  styleUrls: ['./show-offre.component.css']
})
export class ShowOffreComponent implements OnInit {
  offreId;
  offre;
  constructor( @Inject(MAT_DIALOG_DATA) private data: any , private service:OffreService ,private Pservice:CandidatureService,private uService:UserService) { }

  userDetails;
  ngOnInit() {
    this.uService.getUserProfile().subscribe(
      res =>{
        this.userDetails = res;
      },
      err =>{
        console.log(err);
      }

    );
    this.offreId=this.data.offreId;
  this.getOffreById();
 
  }

  

 getOffreById(){
   this.service.getOffresById(this.offreId).subscribe(
     res =>{
       console.log(res)
       this.offre = res;
     },
     err =>{
       console.log(err);
     }   
   );
 }


 Postuler(idOffre,nom,email){
  this.Pservice.PostCandidature(idOffre,nom,email,this.response.dbPath).subscribe(
    (res: any) => {
      
        
        //this.toastr.success('New user created!', 'Registration successful.');
    },
        err => {
          console.log(err);
        }
      
    
    
  );

}

public response: {dbPath: ''}
public uploadFinished = (event) => {
  this.response = event;
}

public createImgPath = (serverPath: string) => {
  return `https://localhost:44319/${serverPath}`;
}
}
