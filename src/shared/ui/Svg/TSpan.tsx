import { TSpan as RNTspan, TSpanProps } from 'react-native-svg';

type Props = TSpanProps & {
    children: React.ReactNode[] | React.ReactNode;
};

export const TSpan = ({ children, ...props }: Props) => {
    return <RNTspan {...props}>{children}</RNTspan>;
};
