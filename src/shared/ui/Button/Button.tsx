import { memo } from 'react';

import { Text } from '../Text/Text';
import { TouchableOpacity } from '../TouchableOpacity';

type Props = Omit<React.ComponentProps<typeof TouchableOpacity>, 'children'> & {
    title: string;
    textAttributes?: React.ComponentProps<typeof Text>;
};

const getStyles = (disabled: boolean | undefined) => {
    if (disabled) {
        return {
            bgColor: 'transparent',
            color: 'gray200',
            borderColor: 'gray200',
            borderWidth: 2,
        };
    }

    return {
        bgColor: 'primary100',
        color: 'white',
        borderColor: 'transparent',
        borderWidth: 0,
    };
};

export const Button = memo(({ title, disabled, textAttributes, ...rest }: Props) => {
    const { bgColor, borderColor, borderWidth, color } = getStyles(disabled);

    return (
        <TouchableOpacity
            alignItems='center'
            justifyContent='center'
            borderColor={borderColor}
            borderWidth={borderWidth}
            bgColor={bgColor}
            disabled={disabled}
            height={64}
            borderRadius={18}
            {...rest}
        >
            <Text color={color} fontSize={16} fontWeight='500' {...textAttributes}>
                {title}
            </Text>
        </TouchableOpacity>
    );
});
