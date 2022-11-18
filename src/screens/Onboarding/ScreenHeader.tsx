import { useNavigation } from '@react-navigation/native';
import { ArrowBackIcon, IconButton, View } from '@shared/ui';

type Props = React.ComponentProps<typeof View> & {
    showBackButton?: boolean;
};

export const ScreenHeader = ({ showBackButton, children, ...rest }: Props) => {
    const navigate = useNavigation();

    const goBack = () => {
        if (navigate.canGoBack()) {
            navigate.goBack();
        }
    };

    return (
        <View
            flexDirection='row'
            height={68}
            paddingVertical={12}
            paddingHorizontal={24}
            backgroundColor='transparent'
            {...rest}
        >
            {showBackButton && (
                <IconButton p={15} onPress={goBack}>
                    <ArrowBackIcon />
                </IconButton>
            )}

            <View flex={1} flexDirection='row'>
                {children}
            </View>
        </View>
    );
};
