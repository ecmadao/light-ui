import React from 'react';
import { storiesOf } from '@storybook/react';
import SwitcherWrapper from '../examples/SwitcherWrapper';

storiesOf('Switcher', module)
  .add('basical', () => (
    <SwitcherWrapper />
  ))
  .add('disabled', () => (
    <SwitcherWrapper disabled={true} />
  ));
