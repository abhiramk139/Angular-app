import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contacts } from './contact';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  
  createDb(){

    const dbcontacts=[
      {
      id:1,
      name:'Abhiram K',
      email:'abhiram.k139@gmail.com',
      phone:9539725883
      },
     {
      id:2,
      name:'Akhil Thomas',
      email:'akhilthomas@gmail.com',
      phone:8296899363
     },
     {
      id:3,
      name:'Adhithyan',
      email:'adithyadinesh@gmail.com',
      phone:9605542524
     },
     {
      id:4,
      name:'Someone',
      email:'someone@gmail.com',
      phone:2939839893
     }];
  return {dbcontacts};
  }

  //genId(contact:contacts[]): number {
  //  return contact.length > 0 ? Math.max(...contact.map(contact => contact.id)) + 1 : 11;
  // }


}
