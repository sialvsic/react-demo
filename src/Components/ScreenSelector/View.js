import React from 'react';
import { ScreenSelector, Screen } from './ScreenSelector';

const ScreenMap = {
  'a': 'a',
  'b': 'b',
  'c': 'c',
};

const A = (props) => {
  const { goToScreen } = props;
  return <div>
    <p>this is Screen A</p>
    <button onClick={ () => {
      goToScreen(ScreenMap.b);
    } }>Go to Page B
    </button>
  </div>;
};

const B = (props) => {
  const { goToScreen } = props;

  return <div>
    <p>this is Screen B</p>
    <button onClick={ () => {
      goToScreen(ScreenMap.c);
    } }>Go to Page C
    </button>
  </div>;
};

const C = (props) => {
  const { goToScreen } = props;

  return <div>
    <p>this is Screen C</p>
    <button onClick={ () => {
      goToScreen(ScreenMap.a);
    } }>Go to Page A
    </button>
  </div>;
};

class View extends React.Component {

  render() {
    return (
      <React.Fragment>
        <p>
          select Page
        </p>
        <ScreenSelector defaultScreen={ ScreenMap.a }>
          <Screen matchName={ ScreenMap.a } Component={ A }/>
          <Screen
            matchName={ ScreenMap.b }
            Component={ B }
          />
          <Screen
            matchName={ ScreenMap.c }
            Component={ C }
          />
        </ScreenSelector>
      </React.Fragment>
    );
  }
}

export default View;
