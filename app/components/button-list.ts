import Component from '@glimmer/component';
import type { ButtonListObject } from 'types';

export interface ButtonListSignature {
  // The arguments accepted by the component
  Args: {
    list: ButtonListObject
  };
  // Any blocks yielded by the component
  Blocks: {
    default: []
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class ButtonList extends Component<ButtonListSignature> {
  fullListClasses = 'button-list '  + this.args.list.listClasses;
}
