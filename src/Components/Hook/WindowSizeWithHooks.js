import React from 'react';
import { useState, useEffect } from 'react';

function WindowSizeWithHooks() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    document.title = `window width is ${ width } px`;
  }, [width]); // Only re-run the effect if count changes

  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    };
  });

  return (
    <div>
      <p>
        widow width is
      </p>
      { width }
    </div>
  );
}

export default WindowSizeWithHooks;
