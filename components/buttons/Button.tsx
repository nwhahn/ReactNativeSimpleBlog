import React from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';
import { Body } from '../typography';

interface ButtonProps {

    variant?: 'primary' | 'secondary',

    onPress: (evt: GestureResponderEvent) => void,

    children: any,
}


const ButtonWrapper = styled.TouchableOpacity<ButtonProps>`
    border-color: blue;
    border-radius: 6px;
    border: 2px solid blue;
    background-color: ${({variant})=> variant === 'primary' ? '#ffffff' : '#76c3d6b3' };
    padding: 8px 16px;
    display: flex;
    text-align: center;
    align-self: center;
    margin: 8px 0px;
`;

const StyledBody = styled(Body)`
    flex-wrap: wrap;
`;

const Button: React.FC<ButtonProps> = ({variant, children, onPress}) => 
<ButtonWrapper variant={variant} onPress={onPress}>
    <StyledBody>
        {children}
    </StyledBody>
</ButtonWrapper>

Button.defaultProps = {
    variant: 'primary',
}

export default Button;