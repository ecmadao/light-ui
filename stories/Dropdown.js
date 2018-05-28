
import React from 'react';
import { storiesOf } from '@storybook/react';
import DropdownWrapper from '../examples/DropdownWrapper';

storiesOf('Dropdown', module)
  .add('basical', () => (
    <DropdownWrapper />
  ))
  .add('disabled', () => (
    <DropdownWrapper disabled />
  ));
