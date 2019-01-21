import React, { Component } from 'react';

import BaseInlineInput from './BaseInlineInput';
import { normaliseMaxNumber, normaliseInRange } from '../../../utils';

const MAX_NUMBER = 99999999;
const MIN_NUMBER = 0;

const withIntegerNumber = (ComposedComponent) => {

  return class extends Component {

    onChange = (value, maxNumber) => {
      const restrictMaxNumber = normaliseMaxNumber(maxNumber);
      const newValue = restrictMaxNumber(parseInt(value)) || 0;

      this.props.onChange && this.props.onChange(newValue);
    };

    onBlur = (value, minNumber, maxNumber) => {
      const newValue = parseInt(normaliseInRange(value, maxNumber, minNumber));

      this.props.onBlur && this.props.onBlur(newValue);
    };

    render() {
      const {
        minNumber = MIN_NUMBER, maxNumber = MAX_NUMBER, ...otherProps
      } = this.props;

      return (
        <ComposedComponent
          { ...otherProps }
          type={ 'tel' }
          onBlur={ (value) => {
            this.onBlur(value, minNumber, maxNumber);
          } }
          onChange={ (value) => {
            this.onChange(value, maxNumber);
          } }
        />
      );
    }
  };
};

export default withIntegerNumber(BaseInlineInput);
