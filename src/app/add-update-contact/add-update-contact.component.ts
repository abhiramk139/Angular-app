import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from '../contact';
import { ContactsService } from '../contacts.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-add-update-contact',
  templateUrl: './add-update-contact.component.html',
  styleUrls: ['./add-update-contact.component.css']
})
export class AddUpdateContactComponent implements OnInit {
  id:number;
  checkName:boolean=true;
  checkEmail:boolean=true;
  checkPhone:boolean=true;
  contact_length:Contacts[];
  validate:boolean=false; 
  contact:Contacts[];
  cont_obj = new Contacts();
 contactsUrl='api/dbcontacts';
 constructor(private router:Router,private contactService:ContactsService,private http:HttpClient) { }

  ngOnInit() {
     this.getId();
  }

  validateName():void
  {
    //alert("hello");
    let reg="[0-9]+";
    if(this.cont_obj.name.match(reg))
    {
     // alert(this.cont_obj.name);
     this.checkName=false;
    }
    else
    {
      this.checkName=true;
    }

  }

  validateEmail():void
  {
    let reg="[a-z]*@[a-z].com";
    if(this.cont_obj.email.match(reg))
    {
     this.checkEmail=true;
    }
    else
    {
      this.checkEmail=false;
    }

  }

  validatePhone(phoneNumber)
  {
    if(phoneNumber.length<10)
    {
      this.checkPhone=false;
    }
    else
    {
      this.checkPhone=true;
    }
  }

  submit():void
  {
    
     
     this.cont_obj.id=this.id;
     this.contactService.addContact(this.cont_obj).subscribe(added_contact => {
     this.router.navigate(['/display_contacts']);
     this.contact.push(added_contact);
        });
     
  
  }


  getId()
  { 
    this.contactService.displayContacts().subscribe(cont=>{this.contact_length=cont
      let len=this.contact_length.length;
    if(len!=0)
    {
     this.id=this.contact_length[len-1].id+1;
    
    }
    else
    {
      this.id=1;
     
    }
  });
     
  }
 
}
