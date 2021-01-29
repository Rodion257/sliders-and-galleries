import React from 'react';
import './SliderPage.css';
import titleImage from '../images/task3/title.png';
import topImage1 from '../images/task3/top-row/top1.jpg';
import topImage2 from '../images/task3/top-row/top2.jpg';
import topImage3 from '../images/task3/top-row/top3.png';
import middleImage1 from '../images/task3/middle-row/middle1.jpg';
import middleImage2 from '../images/task3/middle-row/middle2.jpg';
import middleImage3 from '../images/task3/middle-row/middle3.jpg';
import middleImage4 from '../images/task3/middle-row/middle4.jpg';
import middleImage5 from '../images/task3/middle-row/middle5.jpg';
import middleImage6 from '../images/task3/middle-row/middle6.jpg';
import middleImage7 from '../images/task3/middle-row/middle7.jpg';
import middleImage8 from '../images/task3/middle-row/middle8.jpg';
import bottomImage1 from '../images/task3/bottom-row/bottom1.png';
import bottomImage2 from '../images/task3/bottom-row/bottom2.png';
import bottomImage3 from '../images/task3/bottom-row/bottom3.png';
import bottomImage4 from '../images/task3/bottom-row/bottom4.png';
import bottomImage5 from '../images/task3/bottom-row/bottom5.png';
import bottomImage6 from '../images/task3/bottom-row/bottom6.png';


function SliderPage() {

  const [scrollTop, setScrollTop] = React.useState(0);
  const [scrollMiddle, setScrollMiddle] = React.useState(0);
  const [scrollBottom, setScrollBottom] = React.useState(0);
  const rowTopRef = React.useRef();
  const rowMiddleRef = React.useRef();
  const rowBottomRef = React.useRef();

  let topRowRatio;
  let topRowStartPosition;
  let topRowEndPosition;

  let middleRowRatio;
  let middleRowStartPosition;
  let middleRowEndPosition;

  let bottomRowRatio;
  let bottomRowStartPosition;
  let bottomRowEndPosition;


  const windowHeight = document.documentElement.clientHeight;

  React.useEffect(() => {
    //Первый ряд
    topRowRatio = rowTopRef.current.offsetWidth / document.documentElement.clientHeight;        //Соотношение ширины ряда с картинками к высоте экрана устройства
    topRowStartPosition = rowTopRef.current.getBoundingClientRect().top + window.pageYOffset;   //Верхняя точка ряда по высоте
    topRowEndPosition = rowTopRef.current.getBoundingClientRect().bottom + window.pageYOffset;  //Нижняя точка ряда по высоте
    setScrollTop(-rowTopRef.current.offsetWidth);

    //Второй ряд
    middleRowRatio = rowMiddleRef.current.offsetWidth / document.documentElement.clientHeight;        //Соотношение ширины ряда с картинками к высоте экрана устройства
    middleRowStartPosition = rowMiddleRef.current.getBoundingClientRect().top + window.pageYOffset;   //Верхняя точка ряда по высоте
    middleRowEndPosition = rowMiddleRef.current.getBoundingClientRect().bottom + window.pageYOffset;  //Нижняя точка ряда по высоте
    setScrollMiddle(-rowMiddleRef.current.offsetWidth);

    //Третий ряд
    bottomRowRatio = rowBottomRef.current.offsetWidth / document.documentElement.clientHeight;        //Соотношение ширины ряда с картинками к высоте экрана устройства
    bottomRowStartPosition = rowBottomRef.current.getBoundingClientRect().top + window.pageYOffset;   //Верхняя точка ряда по высоте
    bottomRowEndPosition = rowBottomRef.current.getBoundingClientRect().bottom + window.pageYOffset;  //Нижняя точка ряда по высоте
    setScrollBottom(-rowBottomRef.current.offsetWidth);
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      const topScrollPosition = window.pageYOffset;                   //Верхняя точка экрана устройства при скролле
      const bottomScrollPosition = windowHeight + topScrollPosition;  //Нижняя точка экрана устройства при скролле
      //Если первый ряд находится в поле видимости
      if (bottomScrollPosition >= topRowStartPosition && topScrollPosition <= topRowEndPosition) {
        setScrollTop((topScrollPosition - topRowStartPosition) * topRowRatio)
      }
      //Если второй ряд находится в поле видимости
      if (bottomScrollPosition >= middleRowStartPosition && topScrollPosition <= middleRowEndPosition) {
        setScrollMiddle((topScrollPosition - middleRowStartPosition) * middleRowRatio)
      }
      //Если третий ряд находится в поле видимости
      if (bottomScrollPosition >= bottomRowStartPosition && topScrollPosition <= bottomRowEndPosition) {
        setScrollBottom((topScrollPosition - bottomRowStartPosition) * bottomRowRatio)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <div className="slider-page">
      <img className="slider-page__title-image" src={titleImage} alt="Котик" />

      <div className="slider-row">
        <p className="slider-row__count">01</p>
        <h2 className="slider-row__title">Brand</h2>
        <div className="slider-row__images" style={{ left: `${scrollTop}px` }} ref={rowTopRef}>
          <img className="slider-row__image slider-row__image_position_top" src={topImage1} alt="brand" />
          <img className="slider-row__image slider-row__image_position_top" src={topImage2} alt="brand" />
          <img className="slider-row__image slider-row__image_position_top" src={topImage3} alt="brand" />
        </div>
      </div>

      <div className="slider-row">
        <p className="slider-row__count slider-row__count_position_left">02</p>
        <h2 className="slider-row__title slider-row__title_position_left">Content production</h2>
        <div className="slider-row__images slider-row__images_direction_left" style={{ right: `${scrollMiddle}px` }} ref={rowMiddleRef}>
          <img className="slider-row__image slider-row__image_position_middle" src={middleImage1} alt="content production" />
          <img className="slider-row__image slider-row__image_position_middle" src={middleImage2} alt="content production" />
          <img className="slider-row__image slider-row__image_position_middle" src={middleImage3} alt="content production" />
          <img className="slider-row__image slider-row__image_position_middle" src={middleImage4} alt="content production" />
          <img className="slider-row__image slider-row__image_position_middle" src={middleImage5} alt="content production" />
          <img className="slider-row__image slider-row__image_position_middle" src={middleImage6} alt="content production" />
          <img className="slider-row__image slider-row__image_position_middle" src={middleImage7} alt="content production" />
          <img className="slider-row__image slider-row__image_position_middle" src={middleImage8} alt="content production" />
        </div>
      </div>

      <div className="slider-row">
        <p className="slider-row__count">03</p>
        <h2 className="slider-row__title">Digital</h2>
        <div className="slider-row__images" style={{ left: `${scrollBottom}px` }} ref={rowBottomRef}>
          <img className="slider-row__image slider-row__image_position_bottom" src={bottomImage1} alt="brand" />
          <img className="slider-row__image slider-row__image_position_bottom" src={bottomImage2} alt="brand" />
          <img className="slider-row__image slider-row__image_position_bottom" src={bottomImage3} alt="brand" />
          <img className="slider-row__image slider-row__image_position_bottom" src={bottomImage4} alt="brand" />
          <img className="slider-row__image slider-row__image_position_bottom" src={bottomImage5} alt="brand" />
          <img className="slider-row__image slider-row__image_position_bottom" src={bottomImage6} alt="brand" />
        </div>
      </div>
      
    </div >
  );
}

export default SliderPage;
