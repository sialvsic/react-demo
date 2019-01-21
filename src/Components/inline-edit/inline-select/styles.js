import styled from 'styled-components';
import colors from '../../../constant/colors';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: fit-content;
  background: linear-gradient(90deg, ${colors.CYAN_BLUE} 50%, transparent 0) repeat-x;
  background-size: 7px 1px;
  background-position: 0px 19px;
  padding: 2px 0;
  height: 20px;
  white-space: nowrap;
`;

export const Label = styled.div`
  display: inline-block;
  font-family: 'Museo-Sans-500';
  font-size: 15px;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  padding: 0;
  text-align: right;
  color: ${colors.CYAN_BLUE};
`;
