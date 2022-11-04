import { memo } from 'react';
import { StyleSheet } from 'react-native';
import RNVideo, { VideoProperties } from 'react-native-video';

import { useViewStyle, ViewStyleProps } from '@shared/lib';

type Props = VideoProperties & ViewStyleProps;

export const Video = memo(({ style, ...rest }: Props) => {
    const viewStyle = useViewStyle({ ...rest });
    return <RNVideo style={StyleSheet.compose(viewStyle, style)} {...rest} />;
});
