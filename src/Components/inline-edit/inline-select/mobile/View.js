import React from 'react';
import { Wrapper, Label } from '../styles';
import { NativeSelect } from './styles';

export default ({
  name, id, labelClassName, selectClassName,
  options, selected, onChange, onBlur,
}) => {

  const onSelectChange = event => {
    onChange(options[event.target.selectedIndex]);
  };

  const onSelectBlur = event => {
    onBlur(options[event.target.selectedIndex]);
  };

  return (
    <Wrapper>
      <Label className={ labelClassName }>
        { selected.text }
      </Label>
      <NativeSelect name={ name } className={ selectClassName } id={ id } onBlur={ onSelectBlur } onChange={ onSelectChange } value={ selected.value }>
        {
          options.map((option) => {
            return <option
              value={ option.value }
              key={ option.value }>
              { option.text }
            </option>;
          })
        }
      </NativeSelect>
    </Wrapper>
  );
};
