import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './admin/create-customer/create-customer.component';
import { CustomerDetailsComponent } from './admin/customer-details/customer-details.component';
import { UpdateCustomerComponent } from './admin/update-customer/update-customer.component';
import { CustomerListComponent } from './admin/customer-list/customer-list.component';
import { LoginComponent } from './login.component';
import { AuthGuard } from '../config/auth-guard.service';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessComponent } from './success/success.component';
import { EnrolComponent } from './enrol/enrol.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ZumbaComponent } from './activities/zumba/zumba.component';
import { JogaComponent } from './activities/joga/joga.component';
import { CrossFitComponent } from './activities/cross-fit/cross-fit.component';
import { FitMamaComponent } from './activities/fit-mama/fit-mama.component';
import { AbtComponent } from './activities/abt/abt.component';
import { CoachComponent } from './coach/coach.component';
import { ActivitiesDescriptionComponent } from './activities-description/activities-description.component';
import { OpinionsComponent } from './opinions/opinions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full', 
  },
  { path: 'homepage', 
  component: HomepageComponent,
  },



  {
    path: 'customers',
    component: CustomerListComponent,
    children:[{path:"homepage", component:HomepageComponent}]
  },

  {
    path: 'enrol',
    component: EnrolComponent,

  },

  {
    path: 'registration',
    component: RegistrationComponent,
    
  },

  {
    path: 'success',
    component: SuccessComponent,

  },

  { path: 'admin', component: AdminComponent,
  canActivate: [AuthGuard],
  children:[{path:"activities", component:ActivitiesComponent},{path:"customers", component:CustomerListComponent},{path:"add", component:CreateCustomerComponent},]},
  { path: 'coach', component: CoachComponent },
  { path: 'opinions', component: OpinionsComponent },
  { path: 'description', component: ActivitiesDescriptionComponent },
  { path: 'add', component: CreateCustomerComponent },
  { path: 'update/:id', component: UpdateCustomerComponent },
  { path: 'details/:id', component: CustomerDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'activities', component: LoginComponent,children:[{path:"zumba", component:ZumbaComponent},{path:"joga", component:JogaComponent},{path:"cross", component:CrossFitComponent},{path:"mama", component:FitMamaComponent},{path:"abt", component:AbtComponent}] },
  { path: 'zumba', component: ZumbaComponent,children:[{path:"activities", component:ActivitiesComponent},{path:"customers", component:CustomerListComponent},{path:"add", component:CreateCustomerComponent},] },
  { path: 'joga', component: JogaComponent,children:[{path:"activities", component:ActivitiesComponent},{path:"customers", component:CustomerListComponent},{path:"add", component:CreateCustomerComponent},] }, 
  { path: 'cross', component: CrossFitComponent,children:[{path:"activities", component:ActivitiesComponent},{path:"customers", component:CustomerListComponent},{path:"add", component:CreateCustomerComponent},] },
  { path: 'mama', component: FitMamaComponent,children:[{path:"activities", component:ActivitiesComponent},{path:"customers", component:CustomerListComponent},{path:"add", component:CreateCustomerComponent},] },
  { path: 'abt', component: AbtComponent,children:[{path:"activities", component:ActivitiesComponent},{path:"customers", component:CustomerListComponent},{path:"add", component:CreateCustomerComponent},] }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
