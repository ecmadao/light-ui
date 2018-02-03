import React from 'react';
import { storiesOf } from '@storybook/react';
import ShortMessageWrapper from '../examples/ShortMessageWrapper';

storiesOf('ShortMessage', module)
  .add('basical', () => (
    <ShortMessageWrapper />
  ));
