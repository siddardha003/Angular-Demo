import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModalService {
  isPostEventOpen = signal(false);

  open() { this.isPostEventOpen.set(true); }
  close() { this.isPostEventOpen.set(false); }
}