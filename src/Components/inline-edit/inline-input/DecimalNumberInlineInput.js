import React, { Component } from 'react';
import includes from 'lodash/includes';

import BaseInlineInput from './BaseInlineInput';
import { isValidDecimalNumber } from '../../../utils';
import ALLOWED_ACTIONS from '../../../constant/allowedKeyDownActions';

const MAX_NUMBER = 99999999;
const MIN_NUMBER = 0;

const withDecimalNumber = (ComposedComponent) => {

  return class extends Component {

    onKeyDown = (event) => {
      const {
        key,
        keyCode,
        target: { validity },
      } = event;

      const char = keyCode === 110 || keyCode === 190 ? '.' : key;

      // allow all action keys
      // https://github.com/facebook/react/blob/master/src/renderers/dom/shared/utils/getEventKey.js
      if (includes(ALLOWED_ACTIONS, char)) {
        return;
      }

      // reject anything that the browser detects as badInput
      if (validity && validity.badInput) {
        event.preventDefault();
      }

      // reject anything that's not a number or period
      if (!char.match(/^[\d.]$/)) {
        event.preventDefault();
      }
    };

    onChange = (value, minNumber, maxNumber, decimalLength) => {

      if (!isValidDecimalNumber(value, decimalLength)) {
        const integer = value.split('.')[0];
        const decimal = value.split('.')[1];
        value = parseFloat(value);

        if (decimal && decimal.length > decimalLength) {

          const newDecimals = decimal.slice(0, decimalLength);
          value = `${ integer }.${ newDecimals }`;
        }
      }

      if (!value) {
        value = '0';
      }

      if (parseFloat(value) > maxNumber) {
        value = maxNumber;
      }

      this.props.onChange(value.toString());
    };

    onBlur = (value, minNumber, decimalLength) => {

      if (value < minNumber) {
        value = minNumber;
      }

      const newValue = (parseFloat(value) || minNumber).toFixed(decimalLength);

      this.setState({ active: false });
      this.props.onBlur(newValue);
    };

    render() {
      const {
        minNumber = MIN_NUMBER, maxNumber = MAX_NUMBER, decimalLength, ...otherProps
      } = this.props;

      return (
        <ComposedComponent
          { ...otherProps }
          onKeyDown={ this.onKeyDown }
          onBlur={ (value) => {
            this.onBlur(value, minNumber, decimalLength);
          } }
          onChange={ (value) => {
            this.onChange(value, minNumber, maxNumber, decimalLength);
          } }
          onClick={ this.onClick }
        />
      );
    }
  };
};

export default withDecimalNumber(BaseInlineInput);
