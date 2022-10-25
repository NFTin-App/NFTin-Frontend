import { memo } from 'react';

import { useTheme } from '../ThemeProvider';

import { Button } from './Button';

type Props = React.ComponentProps<typeof Button>;

export const OutlineButton = memo((props: Props) => {
    const { theme } = useTheme();
    return (
        <Button
            bgColor='transparent'
            borderWidth={2}
            borderColor={theme.palette.primary100}
            textAttirbutes={{ color: theme.palette.primary100 }}
            {...props}
        />
    );
});
