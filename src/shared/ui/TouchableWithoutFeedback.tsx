import { memo } from 'react';
import {
    StyleSheet,
    TouchableWithoutFeedback as RNTouchableWithoutFeedback,
    TouchableWithoutFeedbackProps,
} from 'react-native';

import { useViewStyle, ViewStyleProps } from '@shared/lib';

type Props = TouchableWithoutFeedbackProps & ViewStyleProps;

export const TouchableWithoutFeedback = memo(({ style, ...rest }: Props) => {
    const viewStyle = useViewStyle(rest);
    return <RNTouchableWithoutFeedback {...rest} style={StyleSheet.compose(viewStyle, style)} />;
});
