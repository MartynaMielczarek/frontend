import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Customer';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-joga',
  templateUrl: './joga.component.html',
  styleUrls: ['./joga.component.css']
})
export class JogaComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService,  public router: Router) {
  }

  private loadList = () => {
    this.customerService.getCustomersList().subscribe((customers) => {
      console.log('got list of customers', customers);
      this.customers = customers;
    });
  };


  ngOnInit(): void {
    this.loadList();
  }

}

