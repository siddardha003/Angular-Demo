import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ModalState } from './modal.reducer';

export const selectModalState = createFeatureSelector<ModalState>('modal');

export const selectIsPostEventOpen = createSelector(
  selectModalState,
  state => state.isPostEventOpen
);
