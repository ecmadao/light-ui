import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageWrapper from '../examples/MessageWrapper';

storiesOf('Message', module)
  .add('basical', () => (
    <MessageWrapper />
  ));
