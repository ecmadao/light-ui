
import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomSelector from '../examples/CustomSelector';

storiesOf('CustomSelector', module)
  .add('basical', () => (
    <CustomSelector />
  ));
