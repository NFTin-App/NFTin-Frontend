import { DefaultAvatarIcon, Text } from '@shared/ui';
import { useStore } from 'effector-react';
import { $profile } from '../model';

export const Avatar = () => {
    const avatar = useStore($profile.map((profile) => profile?.picture?.$on ?? null));

    if (avatar) {
        return <Text color='black100'>TODO</Text>;
    }

    return <DefaultAvatarIcon />;
};
