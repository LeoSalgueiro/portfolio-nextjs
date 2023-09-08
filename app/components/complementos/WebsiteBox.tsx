'use cliente'
// components/WebsiteBox.tsx
import React from 'react';

interface WebsiteBoxProps {
  imageUrl: string;
  title: string;
  description: string;
}

const WebsiteBox: React.FC<WebsiteBoxProps> = ({ imageUrl, title, description }) => {
  return (
    <div className="bg-semi-transparent rounded-lg shadow-md p-2 pb-4">
      <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg mb-4" />
      <h2 className="text-rose-500 text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default WebsiteBox;
