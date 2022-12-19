import React from 'react';
import { TextProps } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MaskedView from '@react-native-community/masked-view';
import { TextStyleProps } from '@shared/lib';
import { Color } from '@shared/types';

import { Text } from './Text';

type Props = TextProps &
    TextStyleProps & {
        colors: Color[];
    };

export const GradientText = ({ colors, ...rest }: Props) => (
    <MaskedView maskElement={<Text {...rest} />}>
        <LinearGradient colors={colors} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
            <Text {...rest} opacity={0} />
        </LinearGradient>
    </MaskedView>
);
