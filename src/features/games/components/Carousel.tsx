import { useCallback, useEffect, useRef, useState } from 'react';
import { ScreenShot } from '../types/games.types';

interface Props {
  screenshots: ScreenShot[];
  interval: number;
}

const Carousel = ({ screenshots, interval = 3000 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const carouselInterval = useRef<number | null>(null);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === screenshots.length - 1 && direction === 'forward') {
        setDirection('backward');
        return prevIndex - 1;
      } else if (prevIndex === 0 && direction === 'backward') {
        setDirection('forward');
        return prevIndex + 1;
      } else {
        return direction === 'forward' ? prevIndex + 1 : prevIndex - 1;
      }
    });
  }, [direction, screenshots.length]);

  useEffect(() => {
    carouselInterval.current = window.setInterval(nextImage, interval);
    return () => {
      if (carouselInterval.current) {
        clearInterval(carouselInterval.current);
      }
    };
  }, [interval, nextImage]);

  return (
    <div className="w-full h-full transition-all duration-[5s] ease-in carousel group-hover:scale-150">
      <div
        className="w-full h-full carousel__images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {screenshots.map(({ image }: ScreenShot, index: number) => (
          <div key={index} className="w-full h-full carousel__image-wrapper">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="object-cover w-full h-full carousel__image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
