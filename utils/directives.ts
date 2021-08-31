import { VNode } from 'vue';
import { DirectiveBinding } from '@vue/runtime-dom';
import { IHTMLElementClicketyClick } from '~/models';

export const clickOutside = {
  bind: function (element: IHTMLElementClicketyClick, binding: any, vnode: VNode) {
    element.clickOutsideEvent = function (event: MouseEvent) {
      if (!(element === event.target || element.contains(event.target as Node))) {
        if (vnode && vnode.context) {
          vnode.context[binding.expression](event);
        }
      }
    };
    document.body.addEventListener('click', element.clickOutsideEvent);
  },
  unbind: function (element: IHTMLElementClicketyClick) {
    document.body.removeEventListener('click', () => element.clickOutsideEvent);
  },
};
