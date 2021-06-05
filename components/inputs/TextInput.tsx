import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';

export interface TextInputProps {
    placeholder: string,
    value?: string,
    onChange?: (text: string) => void
}

const StyledTextInput = styled.TextInput`
    text-align: center;
    border-bottom-width: 2px;
    border-color: black;
    border-style: solid;
    margin-left: 24px;
    margin-right: 24px;
    padding-bottom: 2px;
`;

const TextInput: React.FC<TextInputProps> = ({placeholder,value = '', onChange}) => {
    const [textInputValue, setTextInputValue ] = useState(value);
    useEffect(() => { // When the value is changed externally update
        setTextInputValue(value);
    }, [value])

    useEffect(() => {
        if(typeof onChange === 'function'){
            onChange(textInputValue);
        }
    }, [textInputValue]) // Whenever the textInputValue changes trigger an onChange

    return <StyledTextInput
        onChangeText={text => setTextInputValue(text)}
        value={textInputValue}
        placeholder={placeholder}
    />
}

TextInput.defaultProps = {
    placeholder: 'Enter text'
}

export default TextInput;