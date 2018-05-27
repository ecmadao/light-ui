import React from 'react';
import { storiesOf } from '@storybook/react';
import LabelWrapper from '../examples/LabelWrapper';

storiesOf('Label', module)
  .add('basical', () => (
    <LabelWrapper />
  ))
  .add('disabled', () => (
    <LabelWrapper disabled={true} />
  ));
