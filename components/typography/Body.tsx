import styled from 'styled-components/native';

interface BodyProps {

    large?: boolean,

    bold?: boolean,

    children: string
}

const BodyText = styled.Text<BodyProps>`
    ${({bold})=> bold && `font-weight: bold;`}
    font-size: ${({large}) => large ? '16px' : '12px' };
`;

BodyText.defaultProps = {
    bold: false,
    large: false,
}

export default BodyText;