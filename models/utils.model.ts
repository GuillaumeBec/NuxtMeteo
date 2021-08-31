import { CSSProperties } from '@vue/runtime-dom';

//! Component Types
export interface NavLink {
  label: string;
  link: string;
  icon?: string;
}

export type StyleValue = string | CSSProperties | Array<StyleValue>;

export interface NuxtLink {
  //TODO
}

//! Display
export interface SizeProperties {
  width?: string;
  space?: string;
  spaceY?: string;
  spaceX?: string;
  height?: string;
  color?: string;
  border?: string;
  thick?: string;
}

export interface ThemeProperties {
  mainColor?: string;
  secondColor?: string;
  textColor?: string;
}

//! Pagination
export interface PaginationParams {
  skip: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

//! Events Html
export interface IHTMLElementClicketyClick extends HTMLElement {
  clickOutsideEvent?(event: MouseEvent): void;
}
