import { useEffect, useRef, useState } from 'react';

export const isIntersectionObserverSupported = () =>
  'IntersectionObserver' in window;

const defaultIntersectionObserverFactory = {
  create: (callback, options) => {
    return isIntersectionObserverSupported()
      ? new IntersectionObserver(callback, options)
      : {
          observe: () => {},
          disconnect: () => {},
        };
  },
};

export const useIntersect = (
  { threshold = 0 },
  observerFactory = defaultIntersectionObserverFactory // Pre-work to make testing easier later
) => {
  const [entry, setEntry] = useState(
    null
  );
  const [node, setNode] = useState(null);

  const observer = useRef();

  useEffect(() => {
    if (observer && observer.current) {
      observer.current.disconnect();
    }

    observer.current = observerFactory.create(
      ([entry]) => {
        setEntry({ isInViewport: entry.isIntersecting });
      },
      {
        threshold,
      }
    );

    // Hold this in new variable since observer.current may be updated and we need this specific reference
    const { current: currentObserver } = observer;

    if (node) {
      currentObserver.observe(node);
    }

    return () => {
      currentObserver.disconnect();
    };
  }, [node, observerFactory, threshold]);

  return [setNode, entry];
};
