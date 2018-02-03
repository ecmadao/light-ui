import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingWrapper from '../examples/LoadingWrapper';

storiesOf('Loading', module)
  .add('No closeable', () => (
    <LoadingWrapper />
  ))
  .add('Closeable, without callback', () => (
    <LoadingWrapper closeAble={true} />
  ))
  .add('Closeable, has callback', () => (
    <LoadingWrapper closeAble={true} hasCloseCallback={true} />
  ))
  .add('Custom style', () => (
    <LoadingWrapper closeAble={true} customStyle={true} />
  ));
