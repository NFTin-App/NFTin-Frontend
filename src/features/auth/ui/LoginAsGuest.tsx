import { viewerModel } from '@entities/viewer';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProp } from '@shared/types';
import { OutlineButton } from '@shared/ui';

interface Props {
    title: string;
}

export const LoginAsGuest = ({ title }: Props) => {
    const { navigate } = useNavigation<ProfileScreenNavigationProp>();

    const onPress = async () => {
        await viewerModel.updateGuestFx(true);

        navigate('Tabs', { screen: 'Home' });
    };

    return (
        <OutlineButton
            textAttirbutes={{ fontSize: 16, fontWeight: '600', color: 'purple' }}
            title={title}
            onPress={onPress}
        />
    );
};
