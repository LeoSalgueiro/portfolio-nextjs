'use client'

// components/Timeline.tsx
import React from 'react';
import TimelineEvent from './TimelineEvent';

interface Event {
  date: string;
  title: string;
  description: string;
  image: string;
}

interface TimelineProps {
  events: Event[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="max-w-5xl mx-auto">
      {events.map((event, index) => (
        <TimelineEvent
          key={index}
          isReversed={index % 2 !== 0}
          {...event}
        />
      ))}
    </div>
  );
};

export default Timeline;
