import { memo } from 'react';

import { TouchableOpacity } from '../TouchableOpacity';

type Props = React.ComponentProps<typeof TouchableOpacity>;

export const IconButton = memo(({ children, ...props }: Props) => {
    return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
});
