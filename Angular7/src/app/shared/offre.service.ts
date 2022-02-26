import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  readonly BaseURI = 'https://localhost:44319/api';

  getOffres(){
    
    return this.http.get(this.BaseURI+ '/offres');
  }
   formModel = this.fb.group({
    Titre: [''],
    Description: [''],
    Salaire: [''],
    DatePub: [''],
  });
  PostOffres(myDate = new Date()) {
    
    var body = {
     titre: this.formModel.value.Titre,    
      description:this.formModel.value.Description,
    salaire:this.formModel.value.Salaire,
    datepub:myDate

    
    
    };
    return this.http.post(this.BaseURI + '/offres', body);
  }

  deleteOffre(id){
    
    return this.http.delete(this.BaseURI+ '/offres/' + id);
  }
  getOffresById(id){
    
    return this.http.get(this.BaseURI+ '/offres/' + id);
  }

  editOffre(d ,myDate = new Date()){
    var body = {
      idOffre : d,
      titre: this.formModel.value.Titre,    
      description:this.formModel.value.Description,
      salaire:this.formModel.value.Salaire,
      datePub:'dernier modification :'+ myDate
     
    
    };
    
    return this.http.put(this.BaseURI + '/offres/' + d, body);
  }

}


