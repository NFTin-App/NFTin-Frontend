import { memo } from 'react';
import { Image as RNImage, ImageProps, StyleSheet } from 'react-native';

import { ImageStyleProps, useImageStyle } from './styles';

interface Props extends ImageProps, ImageStyleProps {}

export const Image = memo(({ style, ...rest }: Props) => {
    const imageStyle = useImageStyle(rest);
    return <RNImage {...rest} style={StyleSheet.compose(imageStyle, style)} />;
});
