import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonWrapper from '../examples/ButtonWrapper';

storiesOf('Button', module)
  .add('basical', () => (
    <ButtonWrapper />
  ))
  .add('disabled', () => (
    <ButtonWrapper disabled={true} />
  ));
