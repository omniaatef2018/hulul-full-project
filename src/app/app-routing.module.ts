import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UsercontractComponent } from './components/usercontract/usercontract.component';
import { ContractDetailsComponent } from './components/contractDetails/contractDetails.component';
import { AddcontractComponent } from './components/addcontract/addcontract.component';


const routes: Routes = [
  {path: '' , component:LoginComponent},
  {path: 'homepage' , component:HomepageComponent},
  {path: 'adduser' , component:AdduserComponent},
  {path: 'usercontract' , component:UsercontractComponent},
  {path: 'contractdetails' , component:ContractDetailsComponent},
  {path: 'addcontract' , component:AddcontractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
