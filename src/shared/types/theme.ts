export interface Theme {
    palette: {
        primary100: string;
        primary200: string;
        accent100: string;
        accent200: string;
        white: string;
        black100: string;
        black200: string;
        gray100: string;
        gray200: string;
        gray300: string;
    };
    icon: {
        size: number;
        strokeWidth: number;
    };
}

export type Pallete = Theme['palette'];
