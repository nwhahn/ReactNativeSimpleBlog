import styled from 'styled-components/native';

interface BodyProps {
  children: string;
}

const BodyText = styled.Text<BodyProps>`
  text-align: center;
  color: black;
  font-size: 36px;
  font-weight: bold;
`;

BodyText.defaultProps = {};

export default BodyText;
