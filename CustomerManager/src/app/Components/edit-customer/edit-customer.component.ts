import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CustomersDataService } from 'src/app/Services/customers-data.service';
import { Customer } from 'src/app/Shared/customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
 cust:Customer;
  editCustomerForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(50)]),
    state:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required)
  });
  
  constructor(private route: ActivatedRoute,
              private customerDataService:CustomersDataService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    
    const id = +this.route.snapshot.params['id'];
    this.cust= this.customerDataService.getCustomer(id);
  

    this.editCustomerForm=new FormGroup({
      name:new FormControl(this.cust.name,[Validators.required,Validators.maxLength(50)]),
      state:new FormControl(this.cust.state,Validators.required),
      city:new FormControl(this.cust.city,Validators.required)
    });
  
  }
  onSubmit() {
    const id=this.route.snapshot.params.id;
   const editCust=this.customerDataService.editCustomer(this.route.snapshot.params.id,this.editCustomerForm.value);
   if(editCust){
    this.toastr.success('updating', 'Success!');
    this.router.navigate(['/customers']);
   }
   else{
    this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
   }
  
   }
   

  

  
  get f() { return this.editCustomerForm.controls }

}
