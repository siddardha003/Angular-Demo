import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { closePostEventModal, openPostEventModal } from '../store/modal/modal.actions';
import { selectIsPostEventOpen } from '../store/modal/modal.selectors';

@Injectable({ providedIn: 'root' })
export class ModalService {
  private store = inject(Store);
  isPostEventOpen = this.store.selectSignal(selectIsPostEventOpen);

  open() { this.store.dispatch(openPostEventModal()); }
  close() { this.store.dispatch(closePostEventModal()); }
}