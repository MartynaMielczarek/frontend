import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

 customer: Customer = new Customer();
submitted = false;

constructor(private customerService: CustomerService,
  private router: Router) { }


ngOnInit() {
}

newCustomer(): void {
  this.submitted = false;
  this.customer = new Customer();
}

save() {
  this.customerService.createCustomer(this.customer)
    .subscribe(data => console.log(data), error => console.log(error));
  this.customer = new Customer();
  this.success();
}

onSubmit() {
  this.submitted = true;
  this.save();    
}
success() {
  this.router.navigate(['/success']);
}

}