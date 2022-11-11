import { Text as RNText, TextProps } from 'react-native-svg';

type Props = TextProps & {
    children: React.ReactNode[] | React.ReactNode;
};

export const SvgText = ({ children, ...props }: Props) => {
    return <RNText {...props}>{children}</RNText>;
};
