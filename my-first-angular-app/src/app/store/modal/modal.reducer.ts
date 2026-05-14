import { createReducer, on } from '@ngrx/store';
import { closePostEventModal, openPostEventModal } from './modal.actions';

export interface ModalState {
  isPostEventOpen: boolean;
}

const initialState: ModalState = {
  isPostEventOpen: false,
};

export const modalReducer = createReducer(
  initialState,
  on(openPostEventModal, state => ({
    ...state,
    isPostEventOpen: true,
  })),
  on(closePostEventModal, state => ({
    ...state,
    isPostEventOpen: false,
  }))
);
