import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ModalService } from '../../services/modal';
import { EventCard } from '../../shared/event-card/event-card';
import { Store } from '@ngrx/store';
import { setCurrentPage } from '../../store/events/events.actions';
import {
  selectCurrentPage,
  selectEventsCount,
  selectPaginatedEvents,
  selectPages,
  selectTotalPages,
} from '../../store/events/events.selectors';

@Component({
  selector: 'app-browse-events',
  standalone: true,
  imports: [NgFor, NgIf, EventCard],
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class Events {
  modalService = inject(ModalService);
  private store = inject(Store);

  eventsCount = this.store.selectSignal(selectEventsCount);
  totalPages = this.store.selectSignal(selectTotalPages);
  currentPage = this.store.selectSignal(selectCurrentPage);
  paginatedEvents = this.store.selectSignal(selectPaginatedEvents);
  pages = this.store.selectSignal(selectPages);

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages()) {
      this.store.dispatch(setCurrentPage({ page }));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}