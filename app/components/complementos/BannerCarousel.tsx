import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BannerCarousel = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-8">
      <div className=" mb-6">
        <h2 className="text-2xl font-semibold">Bienvenido a mi Portfolio</h2>
        <p className="text-gray-600">Aquí verás algunos de los proyectos en los que trabajé y conocerás un poco de mí y de como contactarme</p>
      </div>
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        
      >
        <div>
          <img className='max-h-96 object-cover' src="https://img.freepik.com/fotos-premium/hermoso-fondo-abstracto-cara-gato-arte-pared_898185-1011.jpg" alt="Banner 1" />
        </div>
        <div>
          <img className='max-h-96 object-cover' src="https://images.hdqwalls.com/wallpapers/cat-magical-walk-4k-s9.jpg" alt="Banner 2" />
        </div>
        <div>
          <img className='max-h-96 object-cover' src="https://images.hdqwalls.com/wallpapers/cat-glowing-eyes-4k-wq.jpg" alt="Banner 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
