import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CustomersDataService } from 'src/app/Services/customers-data.service';
import { Customer } from 'src/app/Shared/customer';
import { customers } from 'src/app/Shared/customers';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {
   customersList:Customer[]=customers;
   name:string;
   customerListName:Customer[]=customers;
  
  
  constructor(private customerDataService:CustomersDataService) {}
  ngOnInit() {
    this.customersList=this.customerDataService.getCustomers();
    

  }
  search(){
    if(this.name != ""){
      this.customersList=this.customersList.filter(cust=>{
        return cust.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase())
      });

    }
    else if(this.name== "")
    { 
      this.ngOnInit();
    }
   
  }

}


