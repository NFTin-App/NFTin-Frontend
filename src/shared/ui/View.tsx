import { memo } from 'react';
import { StyleSheet, View as RNView, ViewProps } from 'react-native';

import { useViewStyle, ViewStyleProps } from '@shared/lib';

type Props = ViewProps & ViewStyleProps;

export const View = memo(({ style, ...rest }: Props) => {
    const viewStyle = useViewStyle(rest);
    return <RNView style={StyleSheet.compose(viewStyle, style)} {...rest} />;
});
