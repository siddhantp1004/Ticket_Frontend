import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import {
  FormControl,
  FormGroupDirective,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(300)]),
      transition(':leave', animate(300, style({ opacity: 0 }))),
    ]),
  ],
})
export class CreateTicketComponent implements OnInit {
  ticketForm?: FormGroup;
  ticketEmail: string = '';
  ticketInit = '';
  ticketDescShort: string = '';
  ticketDescLong = '';
  priority = 'critical';
  ticketState = '';
  ticketCategory = '';
  ticketImpact = '';
  AssignedBy = '';
  AssignedTo = '';
  Date = '';
  NgForm = NgForm;
  ngOnInit() {}
  saveTicket(TicketForm: NgForm): void {
    console.log(TicketForm);
  }

  constructor(private formBuilder: FormBuilder) {
    this.ticketForm = this.formBuilder.group({
      ticketEmail: ['', [Validators.required, Validators.email]],
    });
    this.ticketForm = this.formBuilder.group({
      ticketId: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
    this.ticketForm = this.formBuilder.group({
      ticketDescShort: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
    });
  }

  isEmailValid(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  onSubmit(form: NgForm) {
    if (!this.isEmailValid(this.ticketEmail)) {
      console.log('Invalid email format');
      return;
    }
    console.log('Form submitted successfully');
  }
}
