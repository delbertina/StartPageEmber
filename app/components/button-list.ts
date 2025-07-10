import Component from '@glimmer/component';
import type { ListItemObject } from 'types';

export interface ButtonListSignature {
  // The arguments accepted by the component
  Args: {
    title: string;
    items: ListItemObject[];
    listClasses: string;
  };
  // Any blocks yielded by the component
  Blocks: {
    default: []
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class ButtonList extends Component<ButtonListSignature> {
  fullListClasses() {
    return 'button-list '  + this.args.listClasses;
  }
}
