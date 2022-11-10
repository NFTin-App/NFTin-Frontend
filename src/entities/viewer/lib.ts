import { Nullable } from '@shared/types';

export const isValidProfile = (profileId: Nullable<string>) => {
    // TODO сделать более стабильную проверку на наличие профиля
    return !!profileId && profileId !== '0x00';
};
