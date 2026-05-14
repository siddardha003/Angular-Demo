import { createReducer, on } from '@ngrx/store';
import { AppEvent } from '../../services/event.service';
import { setCurrentPage } from './events.actions';

export interface EventsState {
  events: AppEvent[];
  pageSize: number;
  currentPage: number;
}

const initialEvents: AppEvent[] = [
  { id: 1, title: 'Bangalore Music Fest', date: 'May 15, 2026', location: 'Cubbon Park, Bangalore', category: 'Music', image: 'https://picsum.photos/seed/music/400/200', isFree: false, price: 499 },
  { id: 2, title: 'Tech Startup Meetup', date: 'May 18, 2026', location: 'Koramangala, Bangalore', category: 'Technology', image: 'https://picsum.photos/seed/tech/400/200', isFree: true, price: 0 },
  { id: 3, title: 'Street Food Festival', date: 'May 22, 2026', location: 'MG Road, Bangalore', category: 'Food', image: 'https://picsum.photos/seed/food/400/200', isFree: false, price: 199 },
  { id: 4, title: 'Weekend Football League', date: 'May 25, 2026', location: 'Kanteerava Stadium', category: 'Sports', image: 'https://picsum.photos/seed/sports/400/200', isFree: true, price: 0 },
  { id: 5, title: 'Modern Art Exhibition', date: 'May 28, 2026', location: 'National Gallery, Bangalore', category: 'Art', image: 'https://picsum.photos/seed/art/400/200', isFree: false, price: 299 },
  { id: 6, title: 'Stand-up Comedy Night', date: 'Jun 01, 2026', location: 'Indiranagar, Bangalore', category: 'Comedy', image: 'https://picsum.photos/seed/comedy/400/200', isFree: false, price: 399 },
  { id: 7, title: 'Indie Film Screening', date: 'Jun 05, 2026', location: 'Jayanagar, Bangalore', category: 'Art', image: 'https://picsum.photos/seed/film/400/200', isFree: true, price: 0 },
  { id: 8, title: 'AI & ML Conference', date: 'Jun 08, 2026', location: 'Whitefield, Bangalore', category: 'Technology', image: 'https://picsum.photos/seed/ai/400/200', isFree: false, price: 999 },
  { id: 9, title: 'Open Mic Night', date: 'Jun 10, 2026', location: 'HSR Layout, Bangalore', category: 'Music', image: 'https://picsum.photos/seed/openmic/400/200', isFree: true, price: 0 },
  { id: 10, title: 'Marathon 2026', date: 'Jun 14, 2026', location: 'Ulsoor Lake, Bangalore', category: 'Sports', image: 'https://picsum.photos/seed/marathon/400/200', isFree: false, price: 599 },
  { id: 11, title: 'Biryani Cook-off', date: 'Jun 18, 2026', location: 'BTM Layout, Bangalore', category: 'Food', image: 'https://picsum.photos/seed/biryani/400/200', isFree: false, price: 149 },
  { id: 12, title: 'Photography Workshop', date: 'Jun 21, 2026', location: 'Sadashivanagar, Bangalore', category: 'Art', image: 'https://picsum.photos/seed/photo/400/200', isFree: false, price: 799 },
];

const initialState: EventsState = {
  events: initialEvents,
  pageSize: 8,
  currentPage: 1,
};

function getTotalPages(state: EventsState): number {
  return Math.max(1, Math.ceil(state.events.length / state.pageSize));
}

export const eventsReducer = createReducer(
  initialState,
  on(setCurrentPage, (state, { page }) => {
    const totalPages = getTotalPages(state);
    const boundedPage = Math.min(Math.max(page, 1), totalPages);

    return {
      ...state,
      currentPage: boundedPage,
    };
  })
);
