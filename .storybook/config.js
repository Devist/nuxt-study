import Vue from 'vue';
import { configure, addDecorator, addParameters } from '@storybook/vue';
import { addReadme } from 'storybook-readme/vue';
import lerniTheme from './lerniTheme';


addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    theme: lerniTheme,
    // theme: themes.dark,
  },
  readme: {
    // You can set the global code theme here.
    codeTheme: 'github',
  },
});

addDecorator(addReadme);

function loadStories() {
  require('../client/stories');
}

configure(loadStories, module);