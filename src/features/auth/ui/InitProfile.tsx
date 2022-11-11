import { Nullable } from '@shared/types';
import { OutlineButton } from '@shared/ui';
import { useEvent, useStore } from 'effector-react';
import { initProfileFx } from '../authModel';

interface Props {
    profileId: Nullable<string>;
}

export const InitProfile = ({ profileId }: Props) => {
    const initProfile = useEvent(initProfileFx);
    const isPending = useStore(initProfileFx.pending);

    const buttonColor = !profileId ? 'gray200' : 'purple';

    return (
        <OutlineButton
            disabled={!profileId || isPending}
            borderColor={buttonColor}
            textAttributes={{
                color: buttonColor,
            }}
            // TODO обработка завершение контракта, сделать лоадинг
            title={isPending ? 'LOADING...' : 'Continue'}
            onPress={() => initProfile(profileId!!)}
        />
    );
};
