import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUpdateContactComponent } from './add-update-contact/add-update-contact.component';
import { DisplayContactsComponent } from './display-contacts/display-contacts.component';
import { UpdateComponent } from './update/update.component';
const routes:Routes=[{path:'add_update',component:AddUpdateContactComponent},{path:'display_contacts',component:DisplayContactsComponent},{path:'',redirectTo:'/display_contacts',pathMatch:'full'},{path:'update_contacts/:id',component:UpdateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
