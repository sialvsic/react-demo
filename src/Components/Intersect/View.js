import React from 'react';
import styled from 'styled-components';
import StickyContainer from './sticky';
import { useIntersect } from './useIntersect';

const Wrapper = styled.div`
  text-align: center;
  margin: 0 auto;
`;


const FloatingCta = styled.div`
  height: 300px;
`;

const Block = styled.div`
  height: 1500px;
  background-color: #a4dd24;
`;

const View = () => {
  const [setInlineCtaRef, inlineCtaEntry] = useIntersect({ threshold: 1 });
  return (
    <Wrapper>
      <Block>
      </Block>
      <div ref={ setInlineCtaRef }>
        <p>
          this is a box listener
        </p>
      </div>
      <Block>
      </Block>
      <StickyContainer intersectionEntry={ inlineCtaEntry }>
        <FloatingCta>
          float cta
        </FloatingCta>
      </StickyContainer>
    </Wrapper>
  );
};
export default View;
