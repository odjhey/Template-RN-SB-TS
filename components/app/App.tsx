import React from 'react';

import SB from '../storybook';
import App from './DefaultApp';
import Config from 'react-native-config';

export default () => {
  if (Config.IS_STORYBOOK === 'true') return <SB></SB>;
  return <App></App>;
};
