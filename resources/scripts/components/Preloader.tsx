import { memo, useEffect } from 'react';

const Preloader = () => {
  useEffect(() => () => {
    document.querySelectorAll<HTMLElement>('#preloader').forEach(preloader => {
      const loader = preloader;
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
    });
  });

  return (
    <div id="preloader">
      <div className="spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </div>
  );
};

export default memo(Preloader);
