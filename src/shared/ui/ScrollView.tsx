import { memo } from 'react';
import { ScrollView as RNScrollView, ScrollViewProps, StyleSheet } from 'react-native';

import { useViewStyle, ViewStyleProps } from './styles';

interface Props extends ScrollViewProps, ViewStyleProps {}

export const ScrollViwe = memo(({ style, ...rest }: Props) => {
    const viewStyle = useViewStyle(rest);
    return <RNScrollView style={StyleSheet.compose(viewStyle, style)} {...rest} />;
});
