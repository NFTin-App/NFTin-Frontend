import { memo } from 'react';
import { StyleSheet, Text as RNText, TextProps } from 'react-native';

import { TextStyleProps, useTextStyle } from '@shared/lib';

type Props = TextProps & TextStyleProps;

export const Text = memo(({ style, ...rest }: Props) => {
    const textStyle = useTextStyle(rest);

    return <RNText {...rest} style={StyleSheet.compose(textStyle, style)} />;
});
