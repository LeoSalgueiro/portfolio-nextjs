'use client'

// components/TimelineEvent.tsx
import React from 'react';

interface TimelineEventProps {
  date: string;
  title: string;
  description: string;
  image: string;
  isReversed: boolean;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ date, title, description, image, isReversed }) => {
  const eventClasses = isReversed ? 'flex-row-reverse' : '';

  return (
    <div className={`flex items-center mb-8 ${eventClasses}`}>
      <div className="w-1/4 text-center relative">
        <div className="h-12 w-12 bg-rose-700 rounded-full text-white absolute top-0 -mt-4 flex items-center justify-center">
          {date}
        </div>
        <img src={image} alt={title} className="rounded-full h-48 w-48 border-4 border-rose-700" />
      </div>
      <div className="w-3/4 bg-stone-200 rounded-lg shadow p-4">
        <h2 className="text-rose-500 text-lg font-semibold">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default TimelineEvent;
