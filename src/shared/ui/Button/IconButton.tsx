import { memo } from 'react';

import { TouchableOpacity } from '../TouchableOpacity';
import { GradientView } from '../View';

type Props = Omit<React.ComponentProps<typeof TouchableOpacity>, 'start' | 'end'> & {
    colors?: Array<string | number>;
};

export const IconButton = memo(({ children, onPress, colors, ...props }: Props) => {
    const currentColors = colors ?? ['#FFFFFF', '#F7F5FF'];

    return (
        <TouchableOpacity onPress={onPress}>
            <GradientView
                start={{ x: 0, y: 0.7 }}
                end={{ x: 0, y: 1.1 }}
                colors={currentColors}
                {...props}
            >
                {children}
            </GradientView>
        </TouchableOpacity>
    );
});
