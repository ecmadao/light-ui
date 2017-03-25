
import React from 'react';
import { storiesOf } from '@kadira/storybook';

import MessageWrapper from '../examples/MessageWrapper';

storiesOf('Message', module)
  .add('basical', () => (
    <MessageWrapper />
  ));
