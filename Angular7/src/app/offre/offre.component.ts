import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AjouterComponent } from '../ajouter/ajouter.component';
import { OffreService } from '../shared/offre.service';
import { UserService } from '../shared/user.service';
import { ShowOffreComponent } from '../show-offre/show-offre.component';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
  offreDetalis;
  public response: {dbPath: ''}
  constructor(private service:OffreService , private dialog:MatDialog ,private uService:UserService) { }

  ngOnInit() {
    this.service.getOffres().subscribe(
      res =>{
        this.offreDetalis = res;
      },
      err =>{
        console.log(err);
      }

    );
  }
  ajouterDialog() {
    const dref= this.dialog.open(AjouterComponent,{
      width: '20%',
    height: '40%'});
    dref.afterClosed().subscribe(result => {
      this.ngOnInit();
      console.log(`Dialog result: ${result}`);
    });
  }

  onDelete(d) {
    this.service.deleteOffre(d).subscribe(
      res =>{
        this.offreDetalis = res;
        this.ngOnInit();
        
      },
      err =>{
        console.log(err);
      }

    );
  }

 offresbyid2;
onSubmit2(d){
    
  this.service.getOffresById(d).subscribe(
  res =>{
    this.offresbyid2 = res;
  },
  err =>{
    console.log(err);
  }



);


}
onEdit(d){
  this.service.editOffre(d).subscribe(
    (res: any) => {
      
     
        this.service.formModel.reset();
       location.reload();
        //this.toastr.success('New user created!', 'Registration successful.');
    },
        err => {
          console.log(err);
        }
    
  );
}

openDialog(id) {

  const dialogRef =  this.dialog.open(ShowOffreComponent, {
    //width: '50%',
    height: '50%',
    data: { offreId: id}
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

}
