import React from 'react';
import './AdaptiveGallery.css';
import bigTop from '../images/task2/big-top.png';
import bigBottom from '../images/task2/big-bottom.png';
import smallTopFirst from '../images/task2/small-1.png';
import smallTopSecond from '../images/task2/small-2.png';
import smallTopThird from '../images/task2/small-3.png';
import smallTopFourth from '../images/task2/small-4.png';
import smallBottomFirst from '../images/task2/small-5.png';
import smallBottomSecond from '../images/task2/small-6.png';
import smallBottomThird from '../images/task2/small-7.png';
import smallBottomFourth from '../images/task2/small-8.png';




function AdaptiveGallery() {
  const [image, setImage] = React.useState({});
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function handleClick(evt) {
    setIsPopupOpen(true);
    setImage(evt.target);
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  React.useEffect(() => {
    function handleClickClose(evt) {
      if (evt.target.classList.contains('popup')) {
        closePopup();
      }
    }
    document.addEventListener('click', handleClickClose);
    return () => {
      document.removeEventListener('click', handleClickClose);
    }
  }, [])

  React.useEffect(() => {
    function handleESCclose(evt) {
      if (evt.key === "Escape") {
        closePopup();
      }
    }
    document.addEventListener('keydown', handleESCclose);
    return () => {
      document.removeEventListener('keydown', handleESCclose);
    }
  }, [])

  return (
    <>
      <section className="pictures">
        <div onClick={handleClick} className="pictures__big-top" ><img className="pictures__item" src={bigTop} alt='Детский сад' /></div>
        <div onClick={handleClick} className="pictures__small-top-first"><img className="pictures__item" src={smallTopFirst} alt='Детский сад' /></div>
        <div onClick={handleClick} className="pictures__small-top-second"><img className="pictures__item" src={smallTopSecond} alt='Детский сад' /></div>
        <div onClick={handleClick} className="pictures__small-top-third"><img className="pictures__item" src={smallTopThird} alt='Детский сад' /></div>
        <div onClick={handleClick} className="pictures__small-top-fourth"><img className="pictures__item" src={smallTopFourth} alt='Детский сад' /></div>
        <div onClick={handleClick} className="pictures__small-bottom-first"><img className="pictures__item" src={smallBottomFirst} alt='Детский сад' /></div>
        <div onClick={handleClick} className="pictures__small-bottom-second"><img className="pictures__item" src={smallBottomSecond} alt='Детский сад' /></div>
        <div onClick={handleClick} className="pictures__small-bottom-third"><img className="pictures__item" src={smallBottomThird} alt='Детский сад' /></div>
        <div onClick={handleClick} className="pictures__small-bottom-fourth"><img className="pictures__item" src={smallBottomFourth} alt='Детский сад' /></div>
        <div onClick={handleClick} className="pictures__big-bottom" ><img className="pictures__item" src={bigBottom} alt='Детский сад' /></div>
      </section>
      <section className={`popup ${isPopupOpen ? 'popup_opened' : ''}`}>
        <div className="popup-wrapper">
          <button onClick={closePopup} className="popup__close-button" />
          <img className="popup__image" src={image.src} alt={image.alt} />
        </div>
      </section>
    </>
  );
}

export default AdaptiveGallery;
