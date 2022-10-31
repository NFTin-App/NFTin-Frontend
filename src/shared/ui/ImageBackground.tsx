import React, { memo } from 'react';
import { ImageBackground as RNImageBackground, StyleSheet } from 'react-native';

import { useViewStyle, ViewStyleProps } from '@shared/lib';

type Props = React.ComponentProps<typeof RNImageBackground> & ViewStyleProps;

export const ImageBackground = memo(({ style, ...rest }: Props) => {
    const imageStyle = useViewStyle(rest);

    return <RNImageBackground {...rest} style={StyleSheet.compose(imageStyle, style)} />;
});
