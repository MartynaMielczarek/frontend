import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-enrol',
  templateUrl: './enrol.component.html',
  styleUrls: ['./enrol.component.css']
})
export class EnrolComponent implements OnInit{

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

activities = [
  {name: "Zumba, PONIEDZIAŁEK"},
  { name: "Joga, WTOREK"},
  { name: "Cross Fit, ŚRODA"},
  { name: "Fit mama, PIĄTEK"},
  { name: "ABT, NIEDZIELA"}
];
selectedValue = null;

}