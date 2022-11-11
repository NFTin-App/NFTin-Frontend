import { forwardRef } from 'react';
import { StyleSheet, View as RNView, ViewProps } from 'react-native';

import { useViewStyle, ViewStyleProps } from '@shared/lib';

type Props = ViewProps & ViewStyleProps;

export const View = forwardRef<RNView, Props>(({ style, ...rest }, ref) => {
    const viewStyle = useViewStyle(rest);
    return <RNView ref={ref} style={StyleSheet.compose(viewStyle, style)} {...rest} />;
});
