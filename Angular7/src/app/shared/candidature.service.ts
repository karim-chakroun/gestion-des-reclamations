import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CandidatureService {
  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44319/api';

  formModel = this.fb.group({
    nom: [''],
    Email: [''],
    idOffre: [''],
    Date: [''],
    Diplome: [''],
    Competence: [''],
    Experience: [''],
    ConnaissanceLinguistique: [''],
    Status: [''],
    Description:['']
  });

  PostCandidature( idOffre,Nom,Email,imgPath,myDate = new Date()) {
    
    var body = {
     nom: Nom,
     email: Email,
     date: myDate,
     diplome: this.formModel.value.Diplome,
     competence: this.formModel.value.Competence,
     experience: this.formModel.value.Experience,
     connaissancelinguistique: this.formModel.value.ConnaissanceLinguistique,
     status: '',
     cv:imgPath,
     description:this.formModel.value.Description,
      
     idOffre:idOffre
    
    };
    return this.http.post(this.BaseURI + '/candidatures', body);
  }


  getCandidature(){
    
    return this.http.get(this.BaseURI+ '/candidatures');
  }

  StatusCandidature(id,nom,Email,IdOffre,myDate,Diplome,Competence,Experience,ConLing,Status) {
    var body = {
      idDemande: id,
      nom: nom,
      email: Email,
      idOffre: IdOffre,
      date: myDate,
      diplome:Diplome,
      competence:Competence,
      experience:Experience,
      connaissanceLinguistique:ConLing,
      status:Status

    };
    return this.http.put(this.BaseURI + '/candidatures/' + id, body);
  }
  EmailNotif(toId,toName,sub,eBody){
    var body = {
    EmailToId:toId,
    EmailToName:toName,
    EmailSubject:sub,
    EmailBody:eBody
    };
    return this.http.post(this.BaseURI + '/Email', body);
  }
}
