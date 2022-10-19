import { memo } from 'react';

import { Text } from '../Text';
import { useTheme } from '../ThemeProvider';
import { TouchableOpacity } from '../TouchableOpacity';

interface Props extends Omit<React.ComponentProps<typeof TouchableOpacity>, 'children'> {
    title: string;
    textAttirbutes?: React.ComponentProps<typeof Text>;
}

export const Button = memo(({ title, textAttirbutes, ...props }: Props) => {
    const { theme } = useTheme();

    return (
        <TouchableOpacity
            p={23}
            alignItems={'center'}
            borderRadius={18}
            bgColor={theme.palette.purple}
            {...props}
        >
            <Text color={theme.palette.white} {...textAttirbutes}>
                {title}
            </Text>
        </TouchableOpacity>
    );
});
