import { BackButton } from '@screens/routes/BackButton';
import { View } from '@shared/ui';

type Props = React.ComponentProps<typeof View> & {
    showBackButton?: boolean;
};

export const ScreenHeader = ({ showBackButton, children, ...rest }: Props) => {
    return (
        <View
            flexDirection='row'
            height={68}
            paddingVertical={12}
            paddingHorizontal={24}
            backgroundColor='transparent'
            {...rest}
        >
            {showBackButton && <BackButton />}
            <View flex={1} flexDirection='row'>
                {children}
            </View>
        </View>
    );
};
