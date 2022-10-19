import React from 'react';
import { StyleSheet, Text as RNText, TextProps } from 'react-native';

import { TextStyleProps, useTextStyle } from './styles';

interface Props extends TextProps, TextStyleProps {}

export const Text = React.memo(({ style, ...rest }: Props) => {
    const textStyle = useTextStyle(rest);
    return <RNText {...rest} style={StyleSheet.compose(textStyle, style)} />;
});
