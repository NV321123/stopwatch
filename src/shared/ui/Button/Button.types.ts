export enum ButtonVariant {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
  GHOST_DANGER = 'ghost-danger',
  ADD = 'add',
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
}
