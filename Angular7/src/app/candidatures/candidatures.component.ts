import { Component, OnInit } from '@angular/core';
import { CandidatureService } from '../shared/candidature.service';

@Component({
  selector: 'app-candidatures',
  templateUrl: './candidatures.component.html',
  styleUrls: ['./candidatures.component.css']
})
export class CandidaturesComponent implements OnInit {

  constructor(private service:CandidatureService) { }
  candidatures;
  ngOnInit() {

    this.service.getCandidature().subscribe(
      res =>{
        this.candidatures = res;
      },
      err =>{
        console.log(err);
      }

    );
  }

  accepter(id,nom,Email,IdOffre,myDate,Diplome,Competence,Experience,ConLing) {
    this.service.EmailNotif(Email,nom,'approved','your submittion has been approved, welcome!').subscribe();
    this.service.StatusCandidature(id,nom,Email,IdOffre,myDate,Diplome,Competence,Experience,ConLing,'accepté').subscribe(
      (res: any) => {
        this.ngOnInit();
        //this.notifService.PostNotif('ticket accepted',a).subscribe();
        
         // this.onSubmit(i);
         // location.reload();
       // this.router.navigateByUrl('/home/agentpanel');
          //this.toastr.success('New user created!', 'Registration successful.');
        },
          err => {
            console.log(err);
          }      
    );
  }

  refuser(id,nom,Email,IdOffre,myDate,Diplome,Competence,Experience,ConLing) {
    this.service.EmailNotif(Email,nom,'rejected','your submittion has been rejected').subscribe();
    this.service.StatusCandidature(id,nom,Email,IdOffre,myDate,Diplome,Competence,Experience,ConLing,'refusé').subscribe(
      (res: any) => {
        this.ngOnInit();
        //this.notifService.PostNotif('ticket accepted',a).subscribe();
        
         // this.onSubmit(i);
         // location.reload();
       // this.router.navigateByUrl('/home/agentpanel');
          //this.toastr.success('New user created!', 'Registration successful.');
        },
          err => {
            console.log(err);
          }      
    );
  }


}
