import type { Event } from '@/types';

type EventListProps = { events: Event[]; setHighlightedEvent: (event: Event) => void };

const EventsList = ({ events, setHighlightedEvent }: EventListProps) => {
  return events.map((event) => (
    <div
      key={event.id}
      className='card bg-base-100 shadow-xl cursor-pointer'
      onClick={() => setHighlightedEvent(event)}
    >
      <div className='card-body'>
        <h2 className='card-title'>{event.title}</h2>
        <p>{event.description}</p>
        <p>
          <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
        </p>
        <p>
          <strong>Location:</strong> {event.location}
        </p>
      </div>
    </div>
  ));
};

export default EventsList;
