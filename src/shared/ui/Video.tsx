import { memo } from 'react';
import { StyleSheet } from 'react-native';
import RNVideo, { VideoProperties } from 'react-native-video';

import { useViewStyle, ViewStyleProps } from '@shared/lib';

type Props = VideoProperties & ViewStyleProps;

export const Video = memo(({ style, resizeMode, ...rest }: Props) => {
    const viewStyle = useViewStyle({ ...rest });
    return (
        <RNVideo resizeMode={resizeMode} style={StyleSheet.compose(viewStyle, style)} {...rest} />
    );
});
