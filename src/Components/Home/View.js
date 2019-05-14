import React from 'react';
import { Link } from 'react-router-dom';
import { config } from '../../App';

const View = () => {

  return (
    <div>
      { config.map((item) => {
        return (
          <p key={item.name}>
            { item.label } - Visit: <Link to={ item.path }> { item.text }</Link>
          </p>);
      }) }
    </div>
  );
};

export default View;
