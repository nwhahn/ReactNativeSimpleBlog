import React from 'react';
import {GestureResponderEvent} from 'react-native';
import styled from 'styled-components/native';
import {Body} from '../typography';

interface ButtonProps {
  variant?: 'primary' | 'secondary';

  onPress: (evt: GestureResponderEvent) => void;

  children: any;

  disabled?: boolean;
}

const ButtonWrapper = styled.TouchableOpacity<ButtonProps>`
  border-radius: 6px;
  border-width: ${({disabled}) => (disabled ? 0 : 2)}px;
  border-style: solid;
  border-color: blue;
  background-color: ${({variant, disabled}) =>
    disabled ? '#b0b0b0' : variant === 'primary' ? '#ffffff' : '#76c3d6b3'};
  padding: 8px 16px;
  display: flex;
  text-align: center;
  align-self: center;
  margin: 8px 0px;
`;

const StyledBody = styled(Body)`
  flex-wrap: wrap;
`;

const Button: React.FC<ButtonProps> = ({
  variant,
  disabled,
  children,
  onPress,
}) => (
  <ButtonWrapper variant={variant} onPress={onPress} disabled={disabled}>
    <StyledBody large color={disabled ? 'white' : 'black'}>
      {children}
    </StyledBody>
  </ButtonWrapper>
);

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
};

export default Button;
