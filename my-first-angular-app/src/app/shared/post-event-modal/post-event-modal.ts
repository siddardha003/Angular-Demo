import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ModalService } from '../../services/modal';

@Component({
  selector: 'app-post-event-modal',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './post-event-modal.html',
  styleUrl: './post-event-modal.css'
})
export class PostEventModal {
  modalService = inject(ModalService);
  fb = inject(FormBuilder);

  eventForm = this.fb.group({
    title:       ['', Validators.required],
    category:    ['', Validators.required],
    date:        ['', Validators.required],
    location:    ['', Validators.required],
    description: ['', Validators.required],
    isFree:      [true],
    price:       ['']
  });

  get isFree() { return this.eventForm.get('isFree')?.value; }

  onSubmit() {
    if (this.eventForm.valid) {
      console.log(this.eventForm.value);
      this.eventForm.reset({ isFree: true });
      this.modalService.close();
    }
  }

  close() { this.modalService.close(); }
}