import { Text as UIText, TextProps } from 'react-native';
import styled from 'styled-components/native';

import { Pallete } from '@shared/types';

type Color = keyof Pallete | (string & {});

interface Props extends TextProps {
    color?: Color;
    fontWeight?: number;
}

export const Text = styled(UIText)<Props>(({ theme, color, fontWeight }) => {
    const defaultColor = theme.palette.white;
    const palleteColor = theme.palette?.[color as keyof Pallete] || color;
    const currentColor = palleteColor ?? defaultColor;

    const defaultFontWeight = 500;

    return {
        color: currentColor,
        fontWeight: fontWeight ?? defaultFontWeight,
    };
});
