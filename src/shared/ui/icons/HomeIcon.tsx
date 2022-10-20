import { Path } from 'react-native-svg';

import { Icon } from './Icon';

type Props = React.ComponentProps<typeof Icon>;

export const HomeIcon = (props: Props) => {
    return (
        <Icon {...props} viewBox={'0 0 34 34'} outline>
            <Path
                d={
                    'M28 25.0246V17.2947C28.0001 16.7569 27.889 16.2248 27.6735 15.7309C27.458 15.237 27.1428 14.7917 26.747 14.4224L19.374 7.53997C19.0027 7.19321 18.511 7 18 7C17.489 7 16.9973 7.19321 16.626 7.53997L9.253 14.4224C8.85722 14.7917 8.54195 15.237 8.3265 15.7309C8.11104 16.2248 7.99994 16.7569 8 17.2947V25.0246C8 25.5485 8.21071 26.0509 8.58579 26.4214C8.96086 26.7919 9.46957 27 10 27H26C26.5304 27 27.0391 26.7919 27.4142 26.4214C27.7893 26.0509 28 25.5485 28 25.0246Z'
                }
                stroke-linecap={'round'}
                stroke-linejoin={'round'}
            />
        </Icon>
    );
};
