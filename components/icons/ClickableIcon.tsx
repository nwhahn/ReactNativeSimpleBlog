import React from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';
import Icon, {IconProps} from './Icon';
interface ClickableIconProps {
    onPress: (evt: GestureResponderEvent) => void
}

const StyledWrapper = styled.TouchableOpacity`
    padding: 8px;
`;

const ClickableIcon: React.FC<IconProps & ClickableIconProps> = ({
    onPress,
    name,
    size,
    color
}) => <StyledWrapper onPress={onPress}>
    <Icon name={name} size={size} color={color}/>
</StyledWrapper>


ClickableIcon.defaultProps = {
    onPress: () => {}
}

export default ClickableIcon;