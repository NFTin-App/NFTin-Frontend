import { memo } from 'react';
import {
    StyleSheet,
    TouchableOpacity as RNTouchableOpacity,
    TouchableOpacityProps,
} from 'react-native';

import { useViewStyle, ViewStyleProps } from '@shared/lib';

type Props = TouchableOpacityProps & ViewStyleProps;

export const TouchableOpacity = memo(({ style, ...rest }: Props) => {
    const viewStyle = useViewStyle(rest);

    return (
        <RNTouchableOpacity
            activeOpacity={0.6}
            {...rest}
            style={StyleSheet.compose(viewStyle, style)}
        />
    );
});
