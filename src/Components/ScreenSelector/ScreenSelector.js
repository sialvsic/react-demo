import React, { useState } from 'react';

const getScreenByName = (screens, currentScreen) => {
  for(let screen of screens) {
    if(screen.props.matchName === currentScreen) {
      return screen.props.Component;
    }
  }
  return null;
};

export const ScreenSelector = ({ defaultScreen, children }) => {
  const [screenWithProps, setScreenWithProps] = useState({
    screen: defaultScreen,
  });
  const Component = getScreenByName(children, screenWithProps.screen);

  const goToScreenWithProps = (screenName, otherProps) => {
    setScreenWithProps({ screen: screenName, props: otherProps });
  };

  return (
    <Component
      goToScreen={ goToScreenWithProps }
      screenProps={ screenWithProps.props }
    />
  );
};

export const Screen = ({ Component, matchName }) => {
  return <Component matchName={ matchName }/>;
};

/*
type Props<T> = {
  Component: ComponentType<any>;
  matchName: T;
};

export const Screen = <T extends {}>({ Component, matchName }: Props<T>) => {
  return <Component matchName={matchName} />;
};

// export function Screen<T>({ Component, matchName }: Props<T>) {
//   return <Component matchName={matchName} />;
// }
*/
