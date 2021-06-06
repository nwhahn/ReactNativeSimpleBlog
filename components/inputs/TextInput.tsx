import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

import {Platform} from 'react-native';

export interface TextInputProps {
  placeholder: string;
  value?: string;
  onChange?: (text: string) => void;
}

const StyledTextInput = styled.TextInput`
  text-align: center;
  border-color: black;
  border-bottom-width: 2px;
  padding-top: ${() => (Platform.OS === 'ios' ? 16 : 8)}px;
  padding-bottom: ${() => (Platform.OS === 'ios' ? 4 : 2)}px;
  margin-left: 24px;
  margin-right: 24px;
  color: black;
  font-size: 16px;
`;

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  value = '',
  onChange,
}) => {
  const [textInputValue, setTextInputValue] = useState(value);
  useEffect(() => {
    // When the value is changed externally update
    setTextInputValue(value);
  }, [value]);

  useEffect(() => {
    if (typeof onChange === 'function') {
      onChange(textInputValue);
    }
  }, [textInputValue]); // Whenever the textInputValue changes trigger an onChange

  return (
    <StyledTextInput
      onChangeText={text => setTextInputValue(text)}
      value={textInputValue}
      placeholder={placeholder}
    />
  );
};

TextInput.defaultProps = {
  placeholder: 'Enter text',
};

export default TextInput;
