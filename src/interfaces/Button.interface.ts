interface IButton {
    id?: string;
    style: {};
    type?: string;
    children?: React.ReactNode;
    onClick?: (e: React.MouseEvent) => void;
}

export type { IButton };