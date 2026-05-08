import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { ModalService } from '../../services/modal';
import { EventCard } from '../../shared/event-card/event-card';

@Component({
  selector: 'app-browse-events',
  standalone: true,
  imports: [NgFor, NgIf, EventCard],
  templateUrl: './events.html',
  styleUrl: './events.css'
})
export class Events {
  modalService = inject(ModalService);

  allEvents = [
    { id: 1,  title: 'Bangalore Music Fest',     date: 'May 15, 2026', location: 'Cubbon Park, Bangalore',      category: 'Music',      image: 'https://picsum.photos/seed/music/400/200',   isFree: false, price: 499 },
    { id: 2,  title: 'Tech Startup Meetup',       date: 'May 18, 2026', location: 'Koramangala, Bangalore',      category: 'Technology', image: 'https://picsum.photos/seed/tech/400/200',    isFree: true,  price: 0   },
    { id: 3,  title: 'Street Food Festival',       date: 'May 22, 2026', location: 'MG Road, Bangalore',          category: 'Food',       image: 'https://picsum.photos/seed/food/400/200',    isFree: false, price: 199 },
    { id: 4,  title: 'Weekend Football League',    date: 'May 25, 2026', location: 'Kanteerava Stadium',          category: 'Sports',     image: 'https://picsum.photos/seed/sports/400/200',  isFree: true,  price: 0   },
    { id: 5,  title: 'Modern Art Exhibition',      date: 'May 28, 2026', location: 'National Gallery, Bangalore', category: 'Art',        image: 'https://picsum.photos/seed/art/400/200',     isFree: false, price: 299 },
    { id: 6,  title: 'Stand-up Comedy Night',      date: 'Jun 01, 2026', location: 'Indiranagar, Bangalore',      category: 'Comedy',     image: 'https://picsum.photos/seed/comedy/400/200',  isFree: false, price: 399 },
    { id: 7,  title: 'Indie Film Screening',       date: 'Jun 05, 2026', location: 'Jayanagar, Bangalore',        category: 'Art',        image: 'https://picsum.photos/seed/film/400/200',    isFree: true,  price: 0   },
    { id: 8,  title: 'AI & ML Conference',         date: 'Jun 08, 2026', location: 'Whitefield, Bangalore',       category: 'Technology', image: 'https://picsum.photos/seed/ai/400/200',      isFree: false, price: 999 },
    { id: 9,  title: 'Open Mic Night',             date: 'Jun 10, 2026', location: 'HSR Layout, Bangalore',       category: 'Music',      image: 'https://picsum.photos/seed/openmic/400/200', isFree: true,  price: 0   },
    { id: 10, title: 'Marathon 2026',              date: 'Jun 14, 2026', location: 'Ulsoor Lake, Bangalore',      category: 'Sports',     image: 'https://picsum.photos/seed/marathon/400/200',isFree: false, price: 599 },
    { id: 11, title: 'Biryani Cook-off',           date: 'Jun 18, 2026', location: 'BTM Layout, Bangalore',       category: 'Food',       image: 'https://picsum.photos/seed/biryani/400/200', isFree: false, price: 149 },
    { id: 12, title: 'Photography Workshop',       date: 'Jun 21, 2026', location: 'Sadashivanagar, Bangalore',   category: 'Art',        image: 'https://picsum.photos/seed/photo/400/200',   isFree: false, price: 799 },
  ];

  // Pagination
  pageSize = 8;
  currentPage = 1;

  get totalPages() {
    return Math.ceil(this.allEvents.length / this.pageSize);
  }

  get paginatedEvents() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.allEvents.slice(start, start + this.pageSize);
  }

  get pages() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}