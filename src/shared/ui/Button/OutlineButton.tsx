import { memo } from 'react';

import { Button } from './Button';

type Props = React.ComponentProps<typeof Button>;

export const OutlineButton = memo((props: Props) => {
    return (
        <Button
            bgColor='transparent'
            borderWidth={2}
            borderColor='purple'
            textAttirbutes={{ color: 'purple' }}
            {...props}
        />
    );
});
