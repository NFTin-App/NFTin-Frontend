import { Path } from 'react-native-svg';

import { Icon } from './Icon';

type Props = React.ComponentProps<typeof Icon>;

export const ArrowBackIcon = (props: Props) => (
    <Icon width={11} height={17} fill='none' {...props}>
        <Path
            d='M9 2 1.5 8.5 9 15'
            stroke='#8067EB'
            strokeWidth={2.2}
            strokeLinecap='round'
            strokeLinejoin='round'
        />
    </Icon>
);
