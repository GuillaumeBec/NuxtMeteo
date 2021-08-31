import Vue from 'vue';
import {
  SvgIcon,
  CloseButton,
  DownloadButton,
  DeleteButton,
  Action,
  Separator,
  Spinner,
  Popin,
} from '~/components';

const components = {
  SvgIcon,
  CloseButton,
  DownloadButton,
  DeleteButton,
  Action,
  Separator,
  Spinner,
  Popin,
};

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component);
});
