export type DividerSize = 'sm' | 'md' | 'lg' | 'full';
export type DividerColor = 'light' | 'dark' | 'green' | 'gold' | 'quote';

export interface DividerProps {
  size?: DividerSize;
  color?: DividerColor;
  className?: string;
}
