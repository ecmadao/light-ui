import React from 'react';
import { storiesOf } from '@kadira/storybook';

import CardWrapper from '../examples/CardWrapper';

storiesOf('Card', module)
  .add('basical', () => (
    <CardWrapper />
  ));
