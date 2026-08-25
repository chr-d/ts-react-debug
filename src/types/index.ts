type Event = {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  latitude: number;
  longitude: number;
  organizerId: number;
  createdAt: string;
  updatedAt: string;
};

type EventsProp = { events: Event[] };

export type { Event, EventsProp };
