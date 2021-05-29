import { Injectable } from '@angular/core';
import { Customer } from '../Shared/customer';
import { customers } from '../Shared/customers';


@Injectable({
  providedIn: 'root'
})
export class CustomersDataService {
 
  constructor() { }

   //get All customers
   getCustomers(): Customer[] {
    return customers;
  }

  //get Customer by Id
  getCustomer(id:number): Customer {
    return customers.filter((cust) => (cust.id === id))[0];
  }

  //Edit Customer 
  editCustomer(id:number,data:Customer):Customer{
    
    const userId=id-1;
    for (var i in customers) {
      if (i == userId.toString()) {
         customers[i].name = data.name;
         customers[i].state=data.state;
         customers[i].city=data.city
         break;                   //Stop this loop, we found it!
      }
      
    }
    return customers[userId];
    
  }

  // Add New Customer
  addCustomer(data:Customer){
    const id= customers.length +1;
     customers.push({'id':id,'name':data.name,'state':data.state,'city':data.city})
     return customers[id-1];
  }


}
