import { FlexStyle, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import ReactNativeStyleAttributes from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { isUndefined, omitBy, pick } from 'lodash';

import { Pallete, Theme } from '@shared/types';
import { useTheme } from '@shared/ui';

const REACT_NATIVE_STYLE_ATTRIBUTES = Object.keys(ReactNativeStyleAttributes);

type Color = keyof Pallete | (string & {});
type ColorAttributes = 'bgColor' | 'backgroundColor' | 'color' | 'borderColor';

interface FlexStyleAliases {
    p?: FlexStyle['padding'];
    pt?: FlexStyle['paddingTop'];
    pr?: FlexStyle['paddingRight'];
    pb?: FlexStyle['paddingBottom'];
    pl?: FlexStyle['paddingLeft'];
    mt?: FlexStyle['marginTop'];
    mr?: FlexStyle['marginRight'];
    mb?: FlexStyle['marginBottom'];
    ml?: FlexStyle['marginLeft'];
    m?: FlexStyle['margin'];
}

type ColorProps = Partial<Record<ColorAttributes, Color>>;

type FlexStyleProps = FlexStyle & FlexStyleAliases;

export type ViewStyleProps = ViewStyle & FlexStyleAliases & ColorProps;

export type ImageStyleProps = ImageStyle & FlexStyleAliases;

export type TextStyleProps = TextStyle & ColorProps;

export const getThemeColor = (theme: Theme, color: Color | undefined): string | undefined => {
    return theme.palette[color as keyof Pallete] || color;
};

const pickReactNativeStyleAttributes = <T>(props: T) => pick(props, REACT_NATIVE_STYLE_ATTRIBUTES);

const pickFlexStyleAliases = (props: FlexStyleProps): FlexStyle => ({
    margin: props.m ?? props.margin,
    padding: props.p ?? props.padding,
    paddingTop: props.pt,
    paddingRight: props.pr,
    paddingBottom: props.pb,
    paddingLeft: props.pl,
    marginTop: props.mt,
    marginRight: props.mr,
    marginBottom: props.mb,
    marginLeft: props.ml,
});

const useColorProps = <T extends ColorProps>(props: T): ColorProps => {
    const { getColor } = useTheme();
    const backgroundColor = props.backgroundColor ?? props.bgColor;

    return {
        backgroundColor: backgroundColor ? getColor(backgroundColor) : undefined,
        borderColor: props.borderColor ? getColor(props.borderColor) : undefined,
        color: props.color ? getColor(props.color) : undefined,
    };
};

export const useViewStyle = (props: ViewStyleProps): ViewStyle => {
    const colorProps = useColorProps(props);
    return omitBy(
        {
            ...pickReactNativeStyleAttributes(props),
            ...pickFlexStyleAliases(props),
            ...colorProps,
        },
        isUndefined
    );
};

export const useTextStyle = (props: TextStyleProps): TextStyle => {
    const colorProps = useColorProps(props);
    return omitBy(
        {
            ...pickReactNativeStyleAttributes(props),
            ...colorProps,
        },
        isUndefined
    );
};

export const useImageStyle = (props: ImageStyleProps): ImageStyle =>
    omitBy(
        {
            ...pickReactNativeStyleAttributes(props),
            ...pickFlexStyleAliases(props),
        },
        isUndefined
    );
