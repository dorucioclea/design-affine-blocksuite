/// <reference types="react" />
import type { MenuItemProps as MenuItemPropsPrimitive } from '@radix-ui/react-dropdown-menu';
export interface MenuItemProps extends Omit<MenuItemPropsPrimitive, 'asChild' | 'textValue'> {
    type?: 'default' | 'warning' | 'danger';
    preFix?: React.ReactNode;
    endFix?: React.ReactNode;
    checked?: boolean;
    selected?: boolean;
}
export declare const MenuItem: ({ children: propsChildren, type, className: propsClassName, preFix, endFix, checked, selected, ...otherProps }: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
