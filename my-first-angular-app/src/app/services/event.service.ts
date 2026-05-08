import { Injectable } from '@angular/core';

export interface AppEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  category: string;
  image?: string;
  isFree?: boolean;
  price?: number;
  description?: string;
}

@Injectable({ providedIn: 'root' })
export class EventService {
  private events: AppEvent[] = [
    { id: 1, title: 'Bangalore Music Fest', date: 'May 15, 2026', location: 'Cubbon Park, Bangalore', category: 'Music', image: 'https://picsum.photos/seed/music/800/400', isFree: false, price: 499, description: 'A large open-air music festival featuring local and international artists.' },
    { id: 2, title: 'Tech Startup Meetup', date: 'May 18, 2026', location: 'Koramangala, Bangalore', category: 'Technology', image: 'https://picsum.photos/seed/tech/800/400', isFree: true, price: 0, description: 'Networking event for founders, builders, and investors.' },
    { id: 3, title: 'Street Food Festival', date: 'May 22, 2026', location: 'MG Road, Bangalore', category: 'Food', image: 'https://picsum.photos/seed/food/800/400', isFree: false, price: 199, description: 'Taste the best street food across the city in one place.' },
    { id: 4, title: 'Weekend Football League', date: 'May 25, 2026', location: 'Kanteerava Stadium, Bangalore', category: 'Sports', image: 'https://picsum.photos/seed/sports/800/400', isFree: true, price: 0, description: 'Casual community football league for amateurs and enthusiasts.' },
  ];

  getAll() { return this.events.slice(); }
  getById(id: number) { return this.events.find(e => e.id === id) ?? null; }
}
