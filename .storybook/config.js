import { configure } from '@storybook/react';
import {setOptions} from '@storybook/addon-options';

function loadStories() {
    require('../stories/stories.scss');
    require('./stories');
}

configure(loadStories, module);

setOptions({
    showDownPanel: false,
    name: 'vobi-components',
    url: 'https://btomashvili.github.io/vobi-components',
    sidebarAnimations: true
  });