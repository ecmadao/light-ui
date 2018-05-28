
import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomSelectorWrapper from '../examples/CustomSelectorWrapper';

storiesOf('CustomSelector', module)
  .add('basical', () => (
    <CustomSelectorWrapper />
  ))
  .add('disabled', () => (
    <CustomSelectorWrapper disabled />
  ));
