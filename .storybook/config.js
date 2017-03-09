import moment from 'moment';
import { configure, addDecorator } from '@kadira/storybook';

addDecorator((story) => {
  moment.locale('zh-cn');
  return (story());
});

function loadStories() {
  require('../stories/Button');
  require('../stories/Form');
  require('../stories/ShortMessage');
  require('../stories/Loading');
}

configure(loadStories, module);
