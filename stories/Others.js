import React from 'react';
import { storiesOf } from '@kadira/storybook';

import OthersWrapper from '../examples/OthersWrapper';

storiesOf('Others', module)
  .add('basical', () => (
    <OthersWrapper />
  ))
  .add('disabled', () => (
    <OthersWrapper disabled={true} />
  ));
