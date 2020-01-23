import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {enableProdMode} from '@angular/core';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component'
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AssideComponent } from './components/asside/asside.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UsercontractComponent } from './components/usercontract/usercontract.component';
import { ContractDetailsComponent } from './components/contractDetails/contractDetails.component';
import { AddcontractComponent } from './components/addcontract/addcontract.component';
enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    AssideComponent,
    AdduserComponent,
    UsercontractComponent,
    ContractDetailsComponent,
    AddcontractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
