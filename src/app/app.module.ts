import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateCustomerComponent } from 'src/app/admin/create-customer/create-customer.component';
import { CustomerDetailsComponent } from 'src/app/admin/customer-details/customer-details.component';
import { CustomerListComponent } from 'src/app/admin/customer-list/customer-list.component';
import { AdminComponent } from './admin/admin.component';
import { UpdateCustomerComponent } from 'src/app/admin/update-customer/update-customer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { AuthInterceptorService } from '../config/auth-interceptor.service';
import { ApiInterceptor } from '../config/api-interceptor.service';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { SuccessComponent } from './success/success.component';
import { EnrolComponent } from './enrol/enrol.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ZumbaComponent } from './activities/zumba/zumba.component';
import { JogaComponent } from './activities/joga/joga.component';
import { CrossFitComponent } from './activities/cross-fit/cross-fit.component';
import { FitMamaComponent } from './activities/fit-mama/fit-mama.component';
import { CoachComponent } from './coach/coach.component';
import { ActivitiesDescriptionComponent } from './activities-description/activities-description.component';
import { OpinionsComponent } from './opinions/opinions.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateCustomerComponent,
    CustomerDetailsComponent,
    CustomerListComponent,
    AdminComponent,
    UpdateCustomerComponent,
    LoginComponent,
    HomepageComponent,
    RegistrationComponent,
    SuccessComponent,
    EnrolComponent,
    ActivitiesComponent,
    ZumbaComponent,
    JogaComponent,
    CrossFitComponent,
    FitMamaComponent,
    CoachComponent,
    ActivitiesDescriptionComponent,
    OpinionsComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
