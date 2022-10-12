import styled from 'styled-components/native';

import { Button } from './Button';

export const OutlineButton = styled(Button)`
    background: transparent
    border: 2px solid ${(p) => p.theme.palette.purple}
`;
