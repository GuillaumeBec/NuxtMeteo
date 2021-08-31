import {
  Separator,
  Action,
  SvgIcon,
  CloseButton,
  DownloadButton,
  DeleteButton,
  Spinner,
  Popin,
} from '~/components';
import { RawLocation } from 'vue-router';
import { NuxtLink } from '@models';

declare global {
  interface __VLS_GlobalComponents {
    Separator: typeof Separator;
    Action: typeof Action;
    SvgIcon: typeof SvgIcon;
    CloseButton: typeof CloseButton;
    DownloadButton: typeof DownloadButton;
    DeleteButton: typeof DeleteButton;
    Spinner: typeof Spinner;
    Popin: typeof Popin;
    NuxtLink: NuxtLink;
  }
}
