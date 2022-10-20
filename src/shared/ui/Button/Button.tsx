import { memo } from 'react';

import { Text } from '../Text';
import { TouchableOpacity } from '../TouchableOpacity';

type Props = Omit<React.ComponentProps<typeof TouchableOpacity>, 'children'> & {
    title: string;
    textAttirbutes?: React.ComponentProps<typeof Text>;
};

export const Button = memo(({ title, textAttirbutes, ...rest }: Props) => {
    return (
        <TouchableOpacity p={23} alignItems='center' borderRadius={18} bgColor='purple' {...rest}>
            <Text color='white' {...textAttirbutes}>
                {title}
            </Text>
        </TouchableOpacity>
    );
});
