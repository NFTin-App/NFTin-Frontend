import { memo } from 'react';
import {
    StyleSheet,
    TouchableOpacity as RNTouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';

import { useViewStyle, ViewStyleProps } from './styles';

interface Props extends TouchableOpacityProps, ViewStyleProps {}

export const TouchableOpacity = memo(({ style, ...rest }: Props) => {
    const viewStyle = useViewStyle(rest);
    return <RNTouchableOpacity {...rest} style={StyleSheet.compose(viewStyle, style)} />;
});
