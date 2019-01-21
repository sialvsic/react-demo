import React from 'react';
import { isMobileDevice } from '../../../utils';
import Web from './web';
import Mobile from './mobile';

function sortOptions(options, value) {
  return options.concat().sort((a, b) =>
    a.value === value ? -1 : b.value === value ? 1 : 0
  );
}

function getSelected(options, value) {
  return options.filter(option => option.value === value)[0] || options[0];
}

const View = props => {
  const {
    name, id, labelClassName, selectClassName,
    options, value, onChange, onBlur,
  } = props;

  const selected = getSelected(options, value);

  const newProps = {
    name, id, labelClassName, selectClassName, selected,
    options: sortOptions(options, selected.value),
    onChange: option => onChange(option.value),
    onBlur: option => onBlur(option.value),
  };

  return isMobileDevice() ? <Mobile  { ...newProps }/> : <Web{ ...newProps }/>;
};

View.defaultProps = {
  labelClassName: 'inline-select-label',
  selectClassName: 'inline-select',
};

export default View;
