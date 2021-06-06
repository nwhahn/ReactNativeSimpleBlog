import styled from 'styled-components/native';

interface BodyProps {
  large?: boolean;

  bold?: boolean;

  color?: string;

  children: string;
}

const BodyText = styled.Text<BodyProps>`
  ${({bold}) => bold && 'font-weight: bold;'}
  font-size: ${({large}) => (large ? '16px' : '12px')};
  ${({color}) => color && `color: ${color};`}
`;

BodyText.defaultProps = {
  bold: false,
  large: false,
};

export default BodyText;
