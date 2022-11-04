import { memo } from 'react';
import { StyleSheet } from 'react-native';
import RNDropShadow from 'react-native-drop-shadow';

import { useViewStyle } from '@shared/lib';

import { View } from './View';

type Props = React.ComponentProps<typeof View>;

export const DropShadow = memo(({ style, shadowColor, ...rest }: Props) => {
    const viewStyle = useViewStyle({ ...rest, shadowColor });
    return <RNDropShadow style={StyleSheet.compose(viewStyle, style)} {...rest} />;
});
