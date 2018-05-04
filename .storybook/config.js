import { configure, setAddon, addDecorator } from '@storybook/react';

import { withNotes } from '@storybook/addon-notes';
import { configureViewport } from '@storybook/addon-viewport';
import { setOptions } from '@storybook/addon-options';
import backgrounds from '@storybook/addon-backgrounds'
import '@storybook/addon-notes/register'
import '@storybook/addon-console';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);

addDecorator(backgrounds([
  { name: 'White', value: '#ffffff', default: true },
  { name: 'Wet asphalt', value: '#3498db' },
  { name: 'Midnight blue', value: '#34495e' },
  { name: 'Concrete', value: '#2c3e50' },
  { name: 'Asbestos', value: '#95a5a6' },
  { name: 'Silver', value: '#bdc3c7' },
  { name: 'Alizarin', value: '#e74c3c' },
  { name: 'Emerald', value: '#2ecc71' },
]))

function loadStories() {
    require('../stories/stories.scss');
    require('./stories');
}

configure(loadStories, module);

setOptions({
  showAddonPanel: true,
  name: 'vobi-components',
  url: 'https://btomashvili.github.io/vobi-components',
  sidebarAnimations: true,
  showSearchBox: false,
  addonPanelInRight: false,
});