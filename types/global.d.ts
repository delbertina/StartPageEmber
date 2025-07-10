import '@glint/environment-ember-loose';

import type EmberFontAwesomeRegistry from '@fortawesome/ember-fontawesome/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry extends EmberFontAwesomeRegistry {
    Main: typeof Main,
    ListItem: typeof ListItem,
    ButtonList: typeof ButtonList
  }
}
