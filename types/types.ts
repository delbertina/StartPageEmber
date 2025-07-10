import type { IconName, IconLookup, IconDefinition, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export interface ListItemObject {
  link: string;
  text: string;
  icon: IconName | IconLookup | IconDefinition;
  iconPrefix: IconPrefix;
}

export interface ButtonListObject {
  title: string;
  items: ListItemObject[];
  listClasses: string;
}
