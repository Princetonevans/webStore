import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatTableModule} from '@angular/material';
import { MaterialModule } from './shared/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DragulaModule } from 'ng2-dragula';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent, PizzaPartyComponent } from './contact/contact.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { UxComponent } from './ux/ux.component';
import { CustomerComponent } from './customer/customer.component';

import { AuthGuard } from './guards/auth.guard'

import { DataService } from './services/data.service';
import { CustomerService } from './services/customer.service';
import { AuthService } from './services/auth.service';


const appRoutes: Routes = [

  { path: 'home', component: HomeComponent},
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: 'todo', component: TodoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'ux', component: UxComponent },
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
    CustomerComponent,
    UxComponent,
    TodoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    DragulaModule.forRoot(),
    ReactiveFormsModule

  ],
  entryComponents: [PizzaPartyComponent],
  providers: [DataService,
             CustomerService,
             AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
