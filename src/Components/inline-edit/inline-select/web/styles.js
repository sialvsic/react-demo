import styled from 'styled-components';
import colors from '../../../../constant/colors';

export const Select = styled.ul`
  font-family: 'Museo-Sans-300';
  font-size: 15px;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  text-align: left;
  letter-spacing: normal;
  color: ${colors.BLUESTONE};
  position: absolute;
  top: -10px;
  left: -14px;
  border-radius: 3px;
  border: 1px solid ${colors.BLUESTONE};
  background-color: ${colors.WHITE};
  z-index: 20;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Option = styled.li`
  padding: 11px 13px;
  white-space: nowrap;
  &:first-child {
    color: ${colors.CYAN_BLUE};
    font-family: 'Museo-Sans-500';
  }

  &:not(:last-child) {
    border-bottom: 2px solid ${colors.PEBBLE_30};
  }
`;
