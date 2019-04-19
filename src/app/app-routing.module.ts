import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { DetailComponent } from './detail/detail.component';
import { PaymentComponent } from './payment/payment.component';
import { FinalpageComponent } from './finalpage/finalpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupComponent } from './signup/signup.component';

const routes:Routes = [
     {path: 'login', component:LoginPageComponent}, 
     {path : 'signup', component:SignupComponent},    
     {path : '', component:MaincontentComponent },    
     {path : 'detail', component:DetailComponent},
     {path : 'payment', component:PaymentComponent},
     {path : 'finalPage', component:FinalpageComponent},
];

@NgModule({
imports : [RouterModule.forRoot(routes)],
exports : [RouterModule]
})

export class AppRoutingModule {}

export const routingComponents = [LoginPageComponent,SignupComponent, MaincontentComponent, DetailComponent,PaymentComponent,FinalpageComponent]