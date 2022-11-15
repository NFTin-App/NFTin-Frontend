import { Text } from './Text';

type Props = React.ComponentProps<typeof Text>;

export const Body1 = (props: Props) => (
    <Text fontWeight='400' fontSize={18} lineHeight={24} {...props} />
);
