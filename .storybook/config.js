import moment from 'moment';
import { configure, addDecorator } from '@storybook/react';

addDecorator((story) => {
  moment.locale('zh-cn');
  return (story());
});

function loadStories() {
  require('../stories/Button');
  require('../stories/Form');
  require('../stories/ShortMessage');
  require('../stories/Message');
  require('../stories/Tipso');
  require('../stories/Loading');
  require('../stories/Card');
  require('../stories/Slider');
  require('../stories/Label');
  require('../stories/Switcher');
  require('../stories/CustomSelector');
}

configure(loadStories, module);
