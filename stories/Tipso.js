import React from 'react';
import { storiesOf } from '@kadira/storybook';

import TipsoWrapper from '../examples/TipsoWrapper';

storiesOf('Tipso', module)
  .add('basical', () => (
    <TipsoWrapper />
  ));
