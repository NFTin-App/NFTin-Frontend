import { memo } from 'react';

import { Text } from '../Text';
import { useTheme } from '../ThemeProvider';
import { TouchableOpacity } from '../TouchableOpacity';

type Props = Omit<React.ComponentProps<typeof TouchableOpacity>, 'children'> & {
    title: string;
    textAttirbutes?: React.ComponentProps<typeof Text>;
};

export const Button = memo(({ title, textAttirbutes, ...rest }: Props) => {
    const { theme } = useTheme();
    return (
        <TouchableOpacity
            alignItems='center'
            justifyContent='center'
            borderRadius={18}
            bgColor={theme.palette.primary100}
            height={64}
            {...rest}
        >
            <Text color={theme.palette.white} fontSize={16} fontWeight='500' {...textAttirbutes}>
                {title}
            </Text>
        </TouchableOpacity>
    );
});
