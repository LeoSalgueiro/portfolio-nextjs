'use client'

// pages/index.tsx
import React from 'react';
import Timeline from '../aboutme/Timeline';

interface Event {
  date: string;
  title: string;
  description: string;
  image: string;
}

const events: Event[] = [
  {
    date: '2023',
    title: 'Evento 1',
    description: 'Descripción del evento 1.',
    image: 'fotosAbout/1.jpeg',
  },
  {
    date: '2024',
    title: 'Evento 2',
    description: 'Descripción del evento 2.',
    image: 'fotosAbout/2.jpg',
  },
  {
    date: '2023',
    title: 'Evento 1',
    description: 'Descripción del evento 1.',
    image: 'fotosAbout/3.jpg',
  },
  {
    date: '2024',
    title: 'Evento 2',
    description: 'Descripción del evento 2.',
    image: 'fotosAbout/4.jpg',
  },
  {
    date: '2024',
    title: 'Evento 2',
    description: 'Descripción del evento 2.',
    image: 'fotosAbout/5.PNG',
  },
  {
    date: '2024',
    title: 'Evento 2',
    description: 'Descripción del evento 2.',
    image: 'fotosAbout/6.jpg',
  },
];

const IndexTimeline: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center my-6">Acerca de mí</h1>
      <Timeline events={events} />
    </div>
  );
};

export default IndexTimeline;
