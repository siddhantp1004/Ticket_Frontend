import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTicketsComponent } from './tickets/list-tickets.component';
import { CreateTicketComponent } from './tickets/create-ticket.component';

const routes: Routes = [
  {
    path: 'list',
    component: ListTicketsComponent,
  },
  {
    path: 'create',
    component: CreateTicketComponent,
  },
  {
    path:'',
    redirectTo:'/list',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
