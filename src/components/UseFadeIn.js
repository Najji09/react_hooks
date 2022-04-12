import { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const UseFadeIn = () => {
  const fadeinH1 = useFadeIn(6, 3);
  const fadeinP = useFadeIn(2, 0);
  return (
    <div>
      <h1 {...fadeinH1}>Fade</h1>
      <p {...fadeinP}>LoremIpsumalal</p>
    </div>
  );
};

export default UseFadeIn;
