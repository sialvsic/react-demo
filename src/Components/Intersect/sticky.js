import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const STICKY_CONTAINER_HEIGHT = '68px';

export const StickyContainer = styled.section`
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${ STICKY_CONTAINER_HEIGHT };
  box-shadow: 3px -3px 4px 0 rgba(0, 0, 0, 0.2);
  background-color: gray;
  ${ props =>
  props.show
    ? `bottom: 0; opacity: 1`
    : `bottom: -${ STICKY_CONTAINER_HEIGHT }; opacity: 0` };
  transition: bottom 300ms ease-in-out, opacity 500ms ease-in-out;
  z-index: 100;
`;

const View = ({ children, intersectionEntry }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const entryNotInViewport = !(
      intersectionEntry && intersectionEntry.isInViewport
    );
    setShow(entryNotInViewport);
  }, [intersectionEntry, setShow]);

  return (
    <StickyContainer show={ show } aria-hidden="true">
      { children }
    </StickyContainer>
  );
};

export default View;
