import { ReactElement } from 'react';
import { TextProps, TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface Props extends TouchableOpacityProps {
    children: ReactElement<TextProps>;
    className?: string;
}

export const Button = ({ children, ...props }: Props) => {
    return <StyledTouchableOpacity {...props}>{children}</StyledTouchableOpacity>;
};

const StyledTouchableOpacity = styled.TouchableOpacity`
    padding: 23px
    align-items: center
    border-radius: 18px
    background: ${(p) => p.theme.palette.purple}
`;
