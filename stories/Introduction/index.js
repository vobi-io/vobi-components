import React from 'react';
import {storiesOf} from '@storybook/react';

import Markdown from '../../utils/Markdown';

import GettingStarted from '../../README.md';
import Contribution from '../../docs/Contribution.md';

storiesOf('Introduction', module)
    .add('Getting started', () => <Markdown source={GettingStarted}/>)
    .add('Contribution', () => <Markdown source={Contribution}/>)