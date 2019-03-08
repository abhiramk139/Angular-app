import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contacts } from '../contact';
//import { Router } from '@angular/router';
@Component({
  selector: 'app-display-contacts',
  templateUrl: './display-contacts.component.html',
  styleUrls: ['./display-contacts.component.css']
})
export class DisplayContactsComponent implements OnInit {
  contact:Contacts[];
  constructor(private contactService:ContactsService) { }
  get():void
   {
     //this.heroes=this.heroService.getHero();
      this.contactService.displayContacts().subscribe(cont=>this.contact=cont);
   }

  ngOnInit() {

   // alert("hello");
   this.get();
   //alert(this.contact[0].phone);
  }
  
  delete(contact: Contacts): void {
    this.contact = this.contact.filter(c => c !== contact);
    this.contactService.deleteContact(contact).subscribe();
  }

}
