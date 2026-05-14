import { createAction, props } from '@ngrx/store';

export const setCurrentPage = createAction(
  '[Events Page] Set Current Page',
  props<{ page: number }>()
);
