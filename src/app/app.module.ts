import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material';
import { MaterialModule } from './shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent, PizzaPartyComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './services/customer.service';


const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'customer', component: CustomerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }

]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PortfolioComponent,
    PageNotFoundComponent,
    DashboardComponent,
    FooterComponent,
    ContactComponent,
    PizzaPartyComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents: [PizzaPartyComponent],
  providers: [DataService, CustomerService],
  bootstrap: [AppComponent]
})

export class AppModule { }
