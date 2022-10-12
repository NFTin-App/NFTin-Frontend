import { Theme } from '@shared/types';

import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
