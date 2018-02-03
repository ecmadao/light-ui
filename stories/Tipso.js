import React from 'react';
import { storiesOf } from '@storybook/react';
import TipsoWrapper from '../examples/TipsoWrapper';

storiesOf('Tipso', module)
  .add('basical', () => (
    <TipsoWrapper />
  ));
