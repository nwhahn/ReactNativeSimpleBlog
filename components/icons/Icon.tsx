import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export interface IconProps {
  name: 'trash-outline' | 'create-outline';

  color?: string;

  size?: number;
}

const IconComponent: React.FC<IconProps> = ({name, color, size}) => (
  <Icon name={name} size={size} color={color} />
);

IconComponent.defaultProps = {
  color: '#000000',
  size: 16,
};

export default IconComponent;
