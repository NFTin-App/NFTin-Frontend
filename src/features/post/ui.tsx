import { useEvent, useStore } from 'effector-react';

import { viewerModel } from '@entities/viewer';
import { OutlineButton } from '@shared/ui';

import { $postNftPending, postNftFx } from './postModel';

interface Props {
    title: string;
    tokenId: string;
}

export const AddNftButton = ({ title, tokenId }: Props) => {
    const postNft = useEvent(postNftFx);
    const isPending = useStore($postNftPending);

    const onPress = async () => {
        await postNft(tokenId);
    };

    return (
        <OutlineButton
            onPress={onPress}
            title={isPending ? 'Loading...' : title}
            disabled={isPending}
        />
    );
};
