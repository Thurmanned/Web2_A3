import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index.component";
import {SearchComponent} from "./search.component";
import {FundraisersComponent} from "./fundraisers.component";
import {ContactComponent} from "./contact.component";
import {DonateComponent} from "./donate.component";
import {AdminComponent} from "./admin.component";
import {CreateComponent} from "./create.component";
import {UpdateComponent} from "./update.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'fundraisers/:id',
    component: FundraisersComponent
  },
  {
    path: 'donation/:id',
    component: DonateComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'update/:id',
    component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
