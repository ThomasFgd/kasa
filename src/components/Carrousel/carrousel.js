import { useState } from 'react';
import flecheDroite from '../../assets/fleche-droite.png';
import flecheGauche from '../../assets/fleche-gauche.png';

function Carrousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderStyles = {
    height: '100%',
    position: 'relative',
  };
  const slideStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[currentIndex]})`,
  };
  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    left: '32px',
    zIndex: 1,
    cursor: 'pointer',
  };

  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    right: '32px',
    zIndex: 1,
    cursor: 'pointer',
  };

  const currentSlide = {
    position: 'absolute',
    top: '90%',
    // transform: 'translate(50%, -50%)',
    right: '50%',
    zIndex: 1,
    color: '#fff',
    fontSize: '25px',
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;

    setCurrentIndex(newIndex);
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        <img src={flecheGauche} alt="Flèche gauche"></img>
      </div>
      <div style={slideStyles}></div>
      <div style={rightArrowStyles} onClick={goToNext}>
        <img src={flecheDroite} alt="Flèche droite"></img>
      </div>
      <div style={currentSlide}>{`${currentIndex + 1}/${slides.length}`}</div>
    </div>
  );
}

export default Carrousel;
