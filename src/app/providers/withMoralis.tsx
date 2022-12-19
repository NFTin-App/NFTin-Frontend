import { FC } from 'react';
import { createEffect, sample } from 'effector';
import { createGate, useGate } from 'effector-react';
import Moralis from 'moralis';

const appGate = createGate();

sample({
    clock: appGate.open,
    target: createEffect(() => {
        Moralis.start({
            // TODO .env
            apiKey: 'DUnJb3uu2X4ddIpXx3n4Wwt14ulMFevYqai9jpYU7AeGOetHOuKjICaHF31jYayy',
        });
    }),
});

export const withMoralis = (Component: FC) => () => {
    useGate(appGate);

    return <Component />;
};
