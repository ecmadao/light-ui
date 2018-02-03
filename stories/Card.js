import React from 'react';
import { storiesOf } from '@storybook/react';
import CardWrapper from '../examples/CardWrapper';

storiesOf('Card', module)
  .add('basical', () => (
    <CardWrapper />
  ));
