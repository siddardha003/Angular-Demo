import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EventsState } from './events.reducer';

export const selectEventsState = createFeatureSelector<EventsState>('events');

export const selectAllEvents = createSelector(
  selectEventsState,
  state => state.events
);

export const selectPageSize = createSelector(
  selectEventsState,
  state => state.pageSize
);

export const selectCurrentPage = createSelector(
  selectEventsState,
  state => state.currentPage
);

export const selectEventsCount = createSelector(
  selectAllEvents,
  events => events.length
);

export const selectTotalPages = createSelector(
  selectEventsCount,
  selectPageSize,
  (eventsCount, pageSize) => Math.max(1, Math.ceil(eventsCount / pageSize))
);

export const selectPaginatedEvents = createSelector(
  selectAllEvents,
  selectCurrentPage,
  selectPageSize,
  (events, currentPage, pageSize) => {
    const start = (currentPage - 1) * pageSize;
    return events.slice(start, start + pageSize);
  }
);

export const selectPages = createSelector(
  selectTotalPages,
  totalPages => Array.from({ length: totalPages }, (_, i) => i + 1)
);
