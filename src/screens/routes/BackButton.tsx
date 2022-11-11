import { useNavigation } from '@react-navigation/native';
import { ArrowBackIcon, IconButton } from '@shared/ui';

export const BackButton = () => {
    const navigate = useNavigation();

    const goBack = () => {
        if (navigate.canGoBack()) {
            navigate.goBack();
        }
    };

    return (
        <IconButton
            onPress={goBack}
            width={44}
            height={44}
            borderRadius={8}
            alignItems='center'
            justifyContent='center'
        >
            <ArrowBackIcon />
        </IconButton>
    );
};
