import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './Components/customers-list/customers-list.component';
import { EditCustomerComponent } from './Components/edit-customer/edit-customer.component';
import { NewCustomerComponent } from './Components/new-customer/new-customer.component';

const routes: Routes = [
  {path:'',component: CustomersListComponent},
  {path:'customers',component:CustomersListComponent},
  {path:'Add',component:NewCustomerComponent},
  {path:'edit/:id',component:EditCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
