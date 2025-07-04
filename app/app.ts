import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import { importSync, isDevelopingApp, macroCondition } from '@embroider/macros';
import './font-awesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as freeBrandIcons from '@fortawesome/free-brands-svg-icons';
import * as freeRegularIcons from '@fortawesome/free-regular-svg-icons';
import * as freeSolidIcons from '@fortawesome/free-solid-svg-icons';
import '@glint/environment-ember-loose';

if (macroCondition(isDevelopingApp())) {
  importSync('./deprecation-workflow');
}

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

library.add(
  freeBrandIcons['fab'],
  freeRegularIcons['far'],
  freeSolidIcons['fas']
);
