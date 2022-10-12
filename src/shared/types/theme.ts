export interface Theme {
    palette: {
        purple: string;
        white: string;
        pink: string;
        black: string;
        gray100: string;
        gray200: string;
        gray300: string;
    };
}

export type Pallete = Theme['palette'];
