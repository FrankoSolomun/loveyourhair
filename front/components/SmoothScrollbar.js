import React, { useRef, useEffect } from 'react';
import SmoothScrollbar from 'smooth-scrollbar';

const SmoothScrollbarWrapper = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    let scrollbarInstance;
    if (ref.current) {
      scrollbarInstance = SmoothScrollbar.init(ref.current, {
        damping: 0.03,
      });
    }
    return () => {
      if (scrollbarInstance) {
        scrollbarInstance.destroy();
      }
    };
  }, []);

  return (
    <div ref={ref} style={{ height: '100vh', overflow: 'hidden' }}>
      <div style={{ height: '100%' }}>{children}</div>
    </div>
  );
};

export default SmoothScrollbarWrapper;
