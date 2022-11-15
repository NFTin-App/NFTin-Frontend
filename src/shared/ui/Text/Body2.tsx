import { Text } from './Text';

type Props = React.ComponentProps<typeof Text>;

export const Body2 = (props: Props) => (
    <Text fontWeight='400' fontSize={15} lineHeight={22} {...props} />
);
