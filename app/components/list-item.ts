import type { IconDefinition, IconLookup, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core';
import Component from '@glimmer/component';

export interface ListItemSignature {
  // The arguments accepted by the component
  Args: {
    link: string;
    text: string;
    icon: IconName | IconLookup | IconDefinition
    iconPrefix: IconPrefix
  };
  // Any blocks yielded by the component
  Blocks: {
    default: []
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}

export default class ListItem extends Component<ListItemSignature> {
  foo() {
    return 1 + 1;
  }
}
