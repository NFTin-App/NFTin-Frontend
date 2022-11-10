import { forwardRef } from 'react';
import { Image as RNImage, ImageProps, StyleSheet } from 'react-native';

import { ImageStyleProps, useImageStyle } from '@shared/lib';

type Props = ImageProps & ImageStyleProps;

export const Image = forwardRef<RNImage, Props>(({ style, ...rest }, ref) => {
    const imageStyle = useImageStyle(rest);

    return <RNImage ref={ref} style={StyleSheet.compose(imageStyle, style)} {...rest} />;
});
