import React from 'react';
import { storiesOf } from '@storybook/react';
import FormWrapper from '../examples/FormWrapper';

storiesOf('Form', module)
  .add('basical', () => (
    <FormWrapper />
  ))
  .add('disabled', () => (
    <FormWrapper disabled={true} />
  ));
