import { StyleSheet } from 'react-native';
import RNLinearGradient from 'react-native-linear-gradient';

import { useViewStyle, ViewStyleProps } from '@shared/lib';

type Props = Omit<ViewStyleProps, 'start' | 'end'> & React.ComponentProps<typeof RNLinearGradient>;

export const LinearGradient = ({ style, start, end, colors, ...rest }: Props) => {
    const viewStyle = useViewStyle(rest);
    return (
        <RNLinearGradient
            colors={colors}
            start={start}
            end={end}
            style={StyleSheet.compose(viewStyle, style)}
            {...rest}
        />
    );
};
