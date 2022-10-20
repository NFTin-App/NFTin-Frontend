import { memo } from 'react';

import { useTheme } from '@shared/ui';

import { Button } from './Button';

type Props = React.ComponentProps<typeof Button>;

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
