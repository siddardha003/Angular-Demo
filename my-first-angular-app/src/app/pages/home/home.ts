import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { EventCard } from '../../shared/event-card/event-card';
import { ModalService } from '../../services/modal';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, EventCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  modalService = inject(ModalService);
  upcomingEvents = [
  { id: 1, title: 'Bangalore Music Fest', date: 'May 15, 2026', location: 'Cubbon Park, Bangalore', category: 'Music', image: 'https://picsum.photos/seed/music/400/200', isFree: false, price: 499 },
  { id: 2, title: 'Tech Startup Meetup', date: 'May 18, 2026', location: 'Koramangala, Bangalore', category: 'Technology', image: 'https://picsum.photos/seed/tech/400/200', isFree: true, price: 0 },
  { id: 3, title: 'Street Food Festival', date: 'May 22, 2026', location: 'MG Road, Bangalore', category: 'Food', image: 'https://picsum.photos/seed/food/400/200', isFree: false, price: 199 },
  { id: 4, title: 'Weekend Football League', date: 'May 25, 2026', location: 'Kanteerava Stadium, Bangalore', category: 'Sports', image: 'https://picsum.photos/seed/sports/400/200', isFree: true, price: 0 },
  ];
  
}