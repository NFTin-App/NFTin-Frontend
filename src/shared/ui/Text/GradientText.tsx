import React from 'react';
import Svg, { Defs, Stop } from 'react-native-svg';
import { TSpan, SvgText } from '../Svg';
import MaskedView from '@react-native-community/masked-view';
import { View } from '../View';
import { Color } from '@shared/types';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from './Text';
import { TextStyleProps } from '@shared/lib';
import { TextProps } from 'react-native';

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
