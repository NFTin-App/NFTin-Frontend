import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, SvgProps } from 'react-native-svg';

import { useTheme, useViewStyle, ViewStyleProps } from '@shared/lib';

const GRADIENTS: Record<string, string> = {
    accentGradient: 'accent_gradient',
};

const getGradient = (name: string): string | undefined => {
    if (GRADIENTS[name]) {
        return `url(#${GRADIENTS[name]})`;
    }
    return undefined;
};

type Props = Omit<SvgProps, 'stroke' | 'fill'> &
    ViewStyleProps & {
        outline?: boolean;
        color?: ViewStyleProps['borderColor'] & keyof typeof GRADIENTS;
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
        const { theme, getColor } = useTheme();
        const colorFromTheme = getGradient(color) ?? getColor(color);
        return (
            <Svg
                width={width ?? theme.icon.size}
                height={height ?? theme.icon.size}
                strokeWidth={strokeWidth ?? theme.icon.strokeWidth}
                fill={outline ? 'none' : colorFromTheme}
                stroke={outline ? colorFromTheme : 'none'}
                style={StyleSheet.compose(viewStyle, style)}
                {...rest}
            >
                <Defs>
                    {/* // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-expect-error */}
                    <LinearGradient
                        id={GRADIENTS.accentGradient}
                        x1='0%'
                        y1='0%'
                        x2='100%'
                        y2='100%'
                    >
                        <Stop stopColor={theme.palette.primary100} offset='0%' />
                        <Stop stopColor={theme.palette.accent100} offset='45%' />
                        <Stop stopColor={theme.palette.accent200} offset='100%' />
                    </LinearGradient>
                </Defs>
                {children}
            </Svg>
        );
    }
);
