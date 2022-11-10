import { memo } from 'react';

import { Button } from './Button';

type Props = React.ComponentProps<typeof Button>;

export const GhostButton = memo(({ textAttributes, ...rest }: Props) => {
    return (
        <Button
            bgColor='transparent'
            textAttributes={{
                color: 'gray100',
                fontSize: 16,
                fontWeight: '500',
                ...textAttributes,
            }}
            {...rest}
        />
    );
});
