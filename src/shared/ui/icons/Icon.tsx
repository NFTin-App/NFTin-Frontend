import { memo } from 'react';
import { StyleSheet } from 'react-native';
import Svg, { SvgProps } from 'react-native-svg';

import { useViewStyle, ViewStyleProps } from '@shared/lib';
import { Pallete } from '@shared/types';

import { useTheme } from '../ThemeProvider';

type Props = Omit<SvgProps, 'stroke' | 'fill'> &
    ViewStyleProps & {
        outline?: boolean;
        color?: Pallete | (string & {});
    };

export const Icon = memo(
    ({
        width,
        height,
        strokeWidth,
        children,
        outline,
        style,
        color = 'currentColor',
        ...rest
    }: Props) => {
        const viewStyle = useViewStyle(rest);
        const { theme } = useTheme();
        return (
            <Svg
                width={width ?? theme.icon.size}
                height={height ?? theme.icon.size}
                strokeWidth={strokeWidth ?? theme.icon.strokeWidth}
                fill={outline ? 'none' : color}
                stroke={outline ? color : 'none'}
                style={StyleSheet.compose(viewStyle, style)}
                {...rest}
            >
                {children}
            </Svg>
        );
    }
);
