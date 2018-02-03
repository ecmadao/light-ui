import React from 'react';
import { storiesOf } from '@storybook/react';
import OthersWrapper from '../examples/OthersWrapper';

storiesOf('Others', module)
  .add('basical', () => (
    <OthersWrapper />
  ))
  .add('disabled', () => (
    <OthersWrapper disabled={true} />
  ));
