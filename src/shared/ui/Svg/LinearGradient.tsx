import { LinearGradient as RNLinearGradient, LinearGradientProps } from 'react-native-svg';

type Props = LinearGradientProps & {
    children: React.ReactNode[] | React.ReactNode;
};

export const LinearGradient = ({ children, ...props }: Props) => {
    return <RNLinearGradient {...props}>{children}</RNLinearGradient>;
};
