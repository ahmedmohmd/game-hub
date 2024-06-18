import { useEffect, useState } from 'react';

const Carousel = ({ images }: { images: { image: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full carousel">
      {images.map((image, index) => (
        <div
          key={Math.random()}
          className={`w-full carousel-item ${index === currentIndex ? 'block' : 'hidden'}`}
        >
          <img src={image.image} className="w-full" alt="Tailwind CSS Carousel component" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
