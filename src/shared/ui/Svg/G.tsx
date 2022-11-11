import { G as RNG, GProps } from 'react-native-svg';

type Props = GProps & {
    children: React.ReactNode[] | React.ReactNode;
};

export const G = ({ children, ...props }: Props) => {
    return <RNG {...props}>{children}</RNG>;
};
