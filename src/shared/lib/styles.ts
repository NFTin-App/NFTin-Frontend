import { FlexStyle, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import ReactNativeStyleAttributes from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { isUndefined, omitBy, pick } from 'lodash';

import { Pallete } from '@shared/types';

import { theme } from './theme';

const REACT_NATIVE_STYLE_ATTRIBUTES = Object.keys(ReactNativeStyleAttributes);

type Color = keyof Pallete | (string & {});
type StyleColor = string | undefined;
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

type ColorStyleAliases<T> = ColorAttributesProps<Color> & Omit<T, ColorAttributes>;

type ColorAttributesProps<T> = Partial<Record<ColorAttributes, T>>;

type FlexStyleProps = FlexStyle & FlexStyleAliases;

export type ViewStyleProps = FlexStyleAliases & ColorStyleAliases<ViewStyle>;

export type ImageStyleProps = ImageStyle & FlexStyleAliases;

export type TextStyleProps = ColorStyleAliases<TextStyle>;

const getThemeColor = (color: Color | undefined): string | undefined => {
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

const pickColorStyleAliases = <T extends ColorAttributesProps<Color>>(
    props: T
): ColorAttributesProps<StyleColor> => {
    const backgroundColor = props.backgroundColor ?? props.bgColor;

    return {
        backgroundColor: getThemeColor(backgroundColor),
        borderColor: getThemeColor(props.borderColor),
        color: getThemeColor(props.color),
    };
};

export const useViewStyle = (props: ViewStyleProps): ViewStyle =>
    omitBy(
        {
            ...pickReactNativeStyleAttributes(props),
            ...pickFlexStyleAliases(props),
            ...pickColorStyleAliases(props),
        },
        isUndefined
    );

export const useTextStyle = (props: TextStyleProps): TextStyle =>
    omitBy(
        {
            ...pickReactNativeStyleAttributes(props),
            ...pickColorStyleAliases(props),
        },
        isUndefined
    );

export const useImageStyle = (props: ImageStyleProps): ImageStyle =>
    omitBy(
        {
            ...pickReactNativeStyleAttributes(props),
            ...pickFlexStyleAliases(props),
        },
        isUndefined
    );
