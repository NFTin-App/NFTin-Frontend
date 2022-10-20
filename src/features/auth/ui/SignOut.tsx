import { useEvent } from 'effector-react';

import { OutlineButton } from '@shared/ui';

import { killWalletSessonFx } from '../model';

export const SignOut = () => {
    const killWalletSession = useEvent(killWalletSessonFx);

    return (
        <OutlineButton
            title='Sign Out'
            textAttirbutes={{ color: 'purple' }}
            onPress={killWalletSession}
        />
    );
};
