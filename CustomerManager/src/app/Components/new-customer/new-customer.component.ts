import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomersDataService } from 'src/app/Services/customers-data.service';
import { Customer } from 'src/app/Shared/customer';
import { customers } from 'src/app/Shared/customers';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  addCustomerForm = new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(50)]),
    state:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required)
  });

  constructor(private customerDataService:CustomersDataService,
              private toastr:ToastrService,
              private router:Router) { }

  ngOnInit(){
  }
  onSubmit() {
  const custAdd=this.customerDataService.addCustomer(this.addCustomerForm.value);
  if(custAdd){
    this.toastr.success('Adding', 'Success!');
    this.router.navigate(['/customers']);
   }
   else{
    this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
   }
  
  }
  get f() { return this.addCustomerForm.controls }

}
