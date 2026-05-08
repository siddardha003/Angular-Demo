import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./shared/footer/footer";
import { Navbar } from "./shared/navbar/navbar";
import { PostEventModal } from "./shared/post-event-modal/post-event-modal";
import { NgIf } from '@angular/common';
import { ModalService } from './services/modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Footer, Navbar, PostEventModal, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Local Event Board');
  modalService = inject(ModalService);
}
