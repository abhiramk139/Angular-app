import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { Contacts } from './contact';
import { Router } from '@angular/router';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  
  

  constructor(private http:HttpClient,private router:Router) { }
  private contactsUrl='api/dbcontacts';

  displayContacts():Observable<Contacts[]>
  {
    return this.http.get<Contacts[]>(this.contactsUrl);
  }

  addContact(contact:Contacts):Observable<Contacts>
  {
   // alert(contact[0].name); 
 //  console.log(contact.name);
   return this.http.post<Contacts>(this.contactsUrl, contact, httpOptions); 
    

  }

  updateContact (contact: Contacts): Observable<Contacts> {
    return this.http.put(this.contactsUrl, contact, httpOptions).pipe(
      tap(_ => console.log(contact)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
          console.error(error); 
          console.log(`${operation} failed: ${error.message}`);
          return of(result as T);
    };
  }

  deleteContact (contact: Contacts | number): Observable<Contacts> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.contactsUrl}/${id}`;
  
    return this.http.delete<Contacts>(url, httpOptions).pipe(
      tap(_ =>console.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Contacts>('deleteHero'))
    );
  }

}


