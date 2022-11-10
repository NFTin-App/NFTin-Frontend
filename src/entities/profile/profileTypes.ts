import { Maybe, ProfileMedia } from '@shared/api/lens';

export interface Profile {
    bio?: Maybe<string>;
    handle: string;
    id: string;
    name?: Maybe<string>;
    picture?: Maybe<ProfileMedia>;
}

export interface ProfileItem {
    handle: string;
    id: string;
}
