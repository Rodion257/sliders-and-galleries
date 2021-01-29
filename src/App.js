import React from "react";
import './App.css';
import RoundSlider from './components/RoundSlider';
import ApaptiveGallery from './components/AdaptiveGallery';
import SliderPage from './components/SliderPage';

function App() {

  const [firstApp, setFirstApp] = React.useState(true);
  const [secondApp, setSecondApp] = React.useState(false);
  const [thirdApp, setThirdApp] = React.useState(false);

  function displayFirstApp() {
    setFirstApp(true);
    setSecondApp(false);
    setThirdApp(false);
  }

  function displaySecondApp() {
    setFirstApp(false);
    setSecondApp(true);
    setThirdApp(false);
  }

  function displayThirdApp() {
    setFirstApp(false);
    setSecondApp(false);
    setThirdApp(true);
  }


  return (
    <div className="app">

      <div className="app__nav">
        <ul className="app__list">
          <li className="app__list-item"><button className={`app__button ${firstApp && 'app__button_active'}`} onClick={displayFirstApp}>1</button></li>
          <li className="app__list-item"><button className={`app__button ${secondApp && 'app__button_active'}`} onClick={displaySecondApp}>2</button></li>
          <li className="app__list-item"><button className={`app__button ${thirdApp && 'app__button_active'}`} onClick={displayThirdApp}>3</button></li>
        </ul>
      </div>

      {firstApp && <RoundSlider />}
      {secondApp && <ApaptiveGallery />}
      {thirdApp && <SliderPage />}
    </div >
  );
}

export default App;
