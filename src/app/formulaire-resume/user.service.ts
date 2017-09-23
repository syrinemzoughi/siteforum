import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { NgForm } from '@angular/forms';
@Injectable()
export class UserService {

  constructor(private http: Http) { }
  createuser(form: NgForm) {
    
          let headers = new Headers();
            headers.append('Content-Type', 'application/json');

           if(form.value.typePresentation=="Comtribution"){
           var data = JSON.stringify({
            nom: form.value.firstName,
            prenom: form.value.lastName ,
            email:  form.value.email,
            civilisation:form.value.civilisation,
            secteurActivite:form.value.secteurActivite,
            etabablissementOrigine:form.value.etabablissementOrigine,
            statut:form.value.statut,
            telephone:form.value.telephone,
            adresse:form.value.adresse,
            ville:form.value.ville,
            pays:form.value.pays,
            type:"auteur",
            contribution:
                [
                  {
                    titre: form.value.titrePresentation,
                    resumeLong:  form.value.resumeLong,
                    resumeCourt:form.value.resumeCourt,
                    etat:"invalide",
                    axes:
                      [
                        {
                          nomAxe:form.value.axeContribution
                          //description:form.value.AxeContribution
                        }
                      ]
                  }
                ]
             
            }); 
           }else if(form.value.typePresentation=="Formation")
           {
            var data = JSON.stringify({
              nom: form.value.firstName,
              prenom: form.value.lastName ,
              email:  form.value.email,
              civilisation:form.value.civilisation,
              secteurActivite:form.value.secteurActivite,
              etabablissementOrigine:form.value.etabablissementOrigine,
              statut:form.value.statut,
              telephone:form.value.telephone,
              adresse:form.value.adresse,
              ville:form.value.ville,
              pays:form.value.pays,
              type:"formateur",
              formation:
                  [
                    {
                      titre:"",
                      description:"",
                      date:"",
                      duree:"",
                      heure:"",
                      salle:"",
                      lieu:"",
                      categorie:""
                    }
                  ]
              }); 
           }
           else
           {
            var data = JSON.stringify({
              nom: form.value.firstName,
              prenom: form.value.lastName ,
              email:  form.value.email,
              civilisation:form.value.civilisation,
              secteurActivite:form.value.secteurActivite,
              etabablissementOrigine:form.value.etabablissementOrigine,
              statut:form.value.statut,
              telephone:form.value.telephone,
              adresse:form.value.adresse,
              ville:form.value.ville,
              pays:form.value.pays,
              type:"auteur",
              affiche:
                  [
                    {
                      nom:"",
                      image:"",
                      date:""
                    }
                  ]
               
              }); 

           }

                  return this.http.post('http://localhost:8080/api/adduser', data, {headers} );
          }    
}

