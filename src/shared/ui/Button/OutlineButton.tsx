import { memo } from 'react';

import { useTheme } from '../ThemeProvider';

import { Button } from './Button';

interface Props extends React.ComponentProps<typeof Button> {}

export const OutlineButton = memo((props: Props) => {
    const { theme } = useTheme();
    return (
        <Button
            bgColor={'transparent'}
            borderWidth={2}
            borderColor={theme.palette.purple}
            textAttirbutes={{ color: theme.palette.purple }}
            {...props}
        />
    );
});
