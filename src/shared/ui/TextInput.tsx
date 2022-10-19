import { memo } from 'react';
import { StyleSheet, TextInput as RNTextInput, TextInputProps } from 'react-native';

import { TextStyleProps, useTextStyle } from './styles';

interface Props extends TextInputProps, Omit<TextStyleProps, 'textAlign'> {}

export const TextInput = memo(({ style, ...rest }: Props) => {
    const textStyle = useTextStyle(rest);
    return <RNTextInput {...rest} style={StyleSheet.compose(textStyle, style)} />;
});
