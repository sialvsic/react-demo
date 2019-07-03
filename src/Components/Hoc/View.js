import React from 'react';
import { withRouter } from 'react-router-dom';

const A = (Component) => {
  console.log('A');
  return function(props) {
    console.log(props);
    return <Component { ...props }/>;
  };
};

const B = (Component) => {
  console.log('B');
  return function(props) {
    console.log(props);
    return <Component/>;
  };
};

const View = (props) => {
  console.log('View');
  console.log(props);
  return (
    <div>
      this is View
    </div>
  );
};

const H = A(B(View));

const P = function(props) {
  return <H { ...props } from={'123'}/>;
};

export default withRouter(P);
