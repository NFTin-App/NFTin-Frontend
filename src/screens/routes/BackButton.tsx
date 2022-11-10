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
        <IconButton p={15} onPress={goBack}>
            <ArrowBackIcon />
        </IconButton>
    );
};
