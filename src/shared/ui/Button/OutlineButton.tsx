import { memo } from 'react';

import { Button } from './Button';

type Props = React.ComponentProps<typeof Button>;

export const OutlineButton = memo(({ textAttirbutes, ...rest }: Props) => {
    return (
        <Button
            bgColor='transparent'
            borderWidth={2}
            borderColor='primary100'
            textAttirbutes={{ color: 'primary100', ...textAttirbutes }}
            {...rest}
        />
    );
});
