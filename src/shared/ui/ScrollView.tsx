import { memo } from 'react';
import { ScrollView as RNScrollView, ScrollViewProps, StyleSheet } from 'react-native';

import { useViewStyle, ViewStyleProps } from '@shared/lib';

type Props = ScrollViewProps & ViewStyleProps;

export const ScrollViwe = memo(({ style, ...rest }: Props) => {
    const viewStyle = useViewStyle(rest);

    return <RNScrollView style={StyleSheet.compose(viewStyle, style)} {...rest} />;
});
