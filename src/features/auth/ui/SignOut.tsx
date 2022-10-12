import { useEvent } from 'effector-react';

import { OutlineButton, Text } from '@shared/ui';

import { authModel } from '..';

export const SignOut = () => {
    const killWalletSession = useEvent(authModel.killWalletSessonFx);

    return (
        <OutlineButton onPress={killWalletSession}>
            <Text color='purple'>Sign Out</Text>
        </OutlineButton>
    );
};
