import React from 'react';
import { ScrollView as RNScrollView, ScrollViewProps, StyleSheet } from 'react-native';

import { useViewStyle, ViewStyleProps } from '@shared/lib';

type Props = ScrollViewProps & ViewStyleProps;

export const ScrollView = React.forwardRef<RNScrollView | null, Props>(
    ({ style, ...rest }, ref) => {
        const viewStyle = useViewStyle(rest);

        return <RNScrollView ref={ref} style={StyleSheet.compose(viewStyle, style)} {...rest} />;
    }
);
