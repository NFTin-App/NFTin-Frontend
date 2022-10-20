import { memo } from 'react';
import { StyleSheet } from 'react-native';
import Svg, { SvgProps } from 'react-native-svg';

import { useViewStyle, ViewStyleProps } from '@shared/lib';

import { useTheme } from '../ThemeProvider';

type Props = SvgProps &
    ViewStyleProps & {
        outline?: boolean;
    };

export const Icon = memo(
    ({ width, height, strokeWidth, children, outline, style, ...rest }: Props) => {
        const { theme } = useTheme();
        const viewStyle = useViewStyle(rest);
        return (
            <Svg
                width={width ?? theme.icon.size}
                height={height ?? theme.icon.size}
                strokeWidth={strokeWidth ?? theme.icon.strokeWidth}
                fill={outline ? 'none' : 'currentColor'}
                stroke={outline ? 'currentColor' : 'none'}
                style={StyleSheet.compose(viewStyle, style)}
                {...rest}
            >
                {children}
            </Svg>
        );
    }
);
