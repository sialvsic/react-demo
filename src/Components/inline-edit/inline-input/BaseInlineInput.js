import React, { Component } from 'react';
import AutosizeInput from 'react-input-autosize';
import styled from 'styled-components';

import colors from '../../../constant/colors';

export const focusStyle = {
  border: 'none',
  borderRadius: '0',
  color: `${ colors.CYAN_BLUE }`,
  boxShadow: 'none',
  height: '20px',
  textAlign: 'right',
  fontFamily: 'Museo-Sans-500',
  fontSize: '16px',
  lineHeight: 1.25,
  letterSpacing: 'normal',
  padding: '2px 0',
  backgroundColor: `${ colors.ALICE_BLUE }`,
};

const Value = styled.button`
  border: none;
  border-radius: 0;
  box-sizing: content-box;
  color: ${ colors.CYAN_BLUE };
  cursor: pointer
  box-shadow: none;
  height: 20px;
  text-align: right;
  font-family: 'Museo-Sans-500';
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: normal;
  padding: 2px 0;
  background: linear-gradient(90deg, ${
  colors.CYAN_BLUE
} 50%, transparent 0) repeat-x;
  background-size: 7px 1px;
  background-position: 0px 20px;
`;

const Symbol = styled.span`
  font-family: 'Museo-Sans-500';
  color: ${ colors.CYAN_BLUE };
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: normal;
`;

class BaseInlineInput extends Component {
  constructor() {
    super();
    this.state = {
      active: false,
    };
  }

  onBlur = (event) => {
    const newValue = event.target.value;

    this.setState({ active: false });
    this.props.onBlur && this.props.onBlur(newValue, event);
  };

  onChange = (event) => {
    const newValue = event.target.value;
    this.props.onChange && this.props.onChange(newValue, event);
  };

  onClickWrapper = (event) => {
    this.setState({ active: true });
    this.props.onClick && this.props.onClick(event);
  };

  inputRefWrapper = (el) => {
    if (el) {
      el.focus();
      const value = el.value;
      el.value = '';
      el.value = value;
    }
  };

  render() {
    const {
      id, name, value, type = 'text', valueFormatter, activeAriaLabel, defaultAriaLabel,
      autoComplete = 'off', className, symbol = '', ...otherProps
    } = this.props;

    return this.state.active ? (
      <span>
        <AutosizeInput
          { ...otherProps }
          id={ id }
          className={ className }
          name={ name }
          value={ valueFormatter ? valueFormatter(value) : value }
          type={ type }
          onBlur={ this.onBlur }
          onChange={ this.onChange }
          inputRef={ this.inputRefWrapper }
          autoComplete={ autoComplete }
          inputStyle={ focusStyle }
          aria-label={ activeAriaLabel }
        />
        <Symbol>
          { symbol }
        </Symbol>
      </span>
    ) : (
      <Value
        id={ id }
        name={ name }
        className={ className }
        onClick={ this.onClickWrapper }
        aria-label={ defaultAriaLabel }
      >
        { valueFormatter ? valueFormatter(value) : value }
        <Symbol>
          { symbol }
        </Symbol>
      </Value>
    );
  }
}

export default BaseInlineInput;
