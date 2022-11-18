import { Text } from './Text';

type Props = React.ComponentProps<typeof Text>;

export const Heading = (props: Props) => (
    <Text fontWeight='500' fontSize={20} lineHeight={26} {...props} />
);
