import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

import { useViewStyle, ViewStyleProps } from '@shared/lib';

type Props = React.ComponentProps<typeof RNSafeAreaView> & ViewStyleProps;

export const SafeAreaView = memo(({ style, ...rest }: Props) => {
    const viewStyle = useViewStyle(rest);

    return <RNSafeAreaView style={StyleSheet.compose(viewStyle, style)} {...rest} />;
});
