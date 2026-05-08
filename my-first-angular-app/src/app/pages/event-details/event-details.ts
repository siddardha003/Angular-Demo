import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EventService, AppEvent } from '../../services/event.service';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './event-details.html',
  styleUrl: './event-details.css',
})
export class EventDetails {
  private route = inject(ActivatedRoute);
  private eventService = inject(EventService);

  readonly eventId = Number(this.route.snapshot.paramMap.get('id')) || null;
  event: AppEvent | null = this.eventId ? this.eventService.getById(this.eventId) : null;
}
