import { Component, OnInit } from '@angular/core';
import { Contacts } from '../contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  contact:Contacts[];
  cont_obj=new Contacts();
  constructor(private route:ActivatedRoute,private contactService:ContactsService,private location:Location) { }

  ngOnInit() {
  this.getContacts();
  }

  getContacts()
  {
    let id:number;
    id = +this.route.snapshot.paramMap.get('id');

    this.contactService.displayContacts().subscribe(cont => {
      this.contact=cont;
    //  console.log(this.contact);
    for(let i=0;i<this.contact.length;i++)
    {
      if(id==this.contact[i].id)
      {
      this.cont_obj.name=this.contact[i].name;
      this.cont_obj.email=this.contact[i].email;
      this.cont_obj.phone=this.contact[i].phone;
      this.cont_obj.id=id;
      break;
      }
    } 
    });
    
  }


  update():void
  {
    this.contactService.updateContact(this.cont_obj).subscribe(() => this.goBack());
  }


  
  goBack(): void {
    this.location.back();
  }
}
