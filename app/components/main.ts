// import Component from '@glimmer/component';

export interface MainSignature {
  // The arguments accepted by the component
  Args: unknown;
  // Any blocks yielded by the component
  Blocks: {
    default: []
  };
  // The element to which `...attributes` is applied in the component template
  Element: null;
}
