import { Component } from '@angular/core';
import { Ticket } from 'src/app/models/ticket.model';

@Component({
  
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css'],
})
export class ListTicketsComponent {
  tickets: Ticket[] = [
    {
      ticketId: 1,
      description: 'Ticket 1',
      shortDescription: 'This is ticket number 1',
      category: 'HR',
      subCategory: 'Business',
      ticketState: 'In Progress',
      ticketUrgency: 'Critical',
      openedBy: 'Siddhant Pardeshi',
      assignedBy: 'Team Member 1',
      assignedTo: 'Siddhant Pardeshi',
      assignedTeam: 'IT Team',
      openedDate: new Date('10/04/2000'),
      resolutionComment: 'Ticket Related to laptop problem has been resolved',
      resolutionDate: new Date('11/04/2000'),
      workEmail: 'siddhantp1004@gmail.com',
    },
    {
      ticketId: 2,
      description: 'Ticket 2',
      shortDescription: 'This is ticket number 2',
      category: 'IT',
      subCategory: 'Software',
      ticketState: 'Pending',
      ticketUrgency: 'High',
      openedBy: 'Emily Johnson',
      assignedBy: 'Team Member 2',
      assignedTo: 'Team Member 3',
      assignedTeam: 'Development Team',
      openedDate: new Date('12/04/2000'),
      resolutionComment: 'Issue resolved by updating the software.',
      resolutionDate: new Date('14/04/2000'),
      workEmail: 'emily.johnson@example.com',
    },
    {
      ticketId: 3,
      description: 'Ticket 3',
      shortDescription: 'This is ticket number 3',
      category: 'Facilities',
      subCategory: 'Maintenance',
      ticketState: 'Closed',
      ticketUrgency: 'Low',
      openedBy: 'Michael Smith',
      assignedBy: 'Team Member 4',
      assignedTo: 'Team Member 5',
      assignedTeam: 'Maintenance Team',
      openedDate: new Date('15/04/2000'),
      resolutionComment: 'Maintenance performed successfully.',
      resolutionDate: new Date('16/04/2000'),
      workEmail: 'michael.smith@example.com',
    },
  ];
  constructor() {}
  ngOnInit() {}
}

