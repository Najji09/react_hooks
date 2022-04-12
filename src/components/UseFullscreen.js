import { useRef } from 'react';

const useFullscreen = () => {
  const element = useRef();
  const triggerFullScreen = (e) => {
    e.preventDefault();
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };
  return { element, triggerFullScreen, exitFull };
};

const UseFullscreen = () => {
  const { element, triggerFullScreen, exitFull } = useFullscreen();
  return (
    <div>
      <div ref={element}>
        <button onClick={exitFull}>Exit</button>
        <img src="http://placekitten.com/200/300" />
      </div>
      <button onClick={triggerFullScreen}>img fullscreen</button>
    </div>
  );
};

export default UseFullscreen;
