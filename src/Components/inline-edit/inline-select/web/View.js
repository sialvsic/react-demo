import React, { Component } from 'react';
import { Select, Option } from './styles';
import { Wrapper, Label } from '../styles';

export default class View extends Component {
  state = {
    active: false,
  };

  onOptionClick = option => event => {
    this.setState({ active: false });
    this.props.onChange(option);
    event.stopPropagation();
  };

  onLabelClick = () => {
    this.setState({ active: true });
  };

  onLabelBlur = option => () => {
    this.props.onBlur(option);
    this.setState({ active: false });
  };

  render() {
    const {
      name, id, labelClassName, selectClassName,
      options, selected,
    } = this.props;

    return (
      <Wrapper>
        <Label tabIndex="-1"
          onClick={ this.onLabelClick }
          onBlur={ this.onLabelBlur(selected) }
          className={ labelClassName }>
          { selected.text }
          { this.state.active && (
            <Select name={ name } id={ id } className={ selectClassName }>
              {
                options.map((option) => {
                  return <Option key={ option.value } onClick={ this.onOptionClick(option) }>
                    { option.text }
                  </Option>;
                })
              }
            </Select>
          ) }
        </Label>
      </Wrapper>
    );
  }
}
