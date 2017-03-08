
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ShortMessageWrapper from '../examples/ShortMessageWrapper';

storiesOf('ShortMessage', module)
  .add('basical', () => (
    <ShortMessageWrapper />
  ));
