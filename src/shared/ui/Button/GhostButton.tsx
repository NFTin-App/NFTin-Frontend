import { memo } from 'react';

import { Button } from './Button';

type Props = React.ComponentProps<typeof Button>;

export const GhostButton = memo(({ textAttirbutes, ...rest }: Props) => {
    return (
        <Button
            bgColor='transparent'
            textAttirbutes={{
                color: 'gray100',
                fontSize: 16,
                fontWeight: '500',
                ...textAttirbutes,
            }}
            {...rest}
        />
    );
});
