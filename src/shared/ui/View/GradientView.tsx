import { StyleSheet } from 'react-native';
import LinearGradient, { LinearGradientProps } from 'react-native-linear-gradient';

import { useViewStyle, ViewStyleProps } from '@shared/lib';

type Props = LinearGradientProps & Omit<ViewStyleProps, 'end' | 'start'>;

export const GradientView = ({ style, start, end, ...rest }: Props) => {
    const viewStyle = useViewStyle(rest);

    return (
        <LinearGradient
            style={StyleSheet.compose(viewStyle, style)}
            start={start}
            end={end}
            {...rest}
        />
    );
};
