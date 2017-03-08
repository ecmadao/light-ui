import moment from 'moment';
import { configure, addDecorator } from '@kadira/storybook';

addDecorator((story) => {
  moment.locale('zh-cn');
  return (story());
});

function loadStories() {
  require('../stories/Button');
  require('../stories/Form');
  // require('../stories/CheckButton');
  // require('../stories/Label');
  // require('../stories/Selector');
  // require('../stories/CustomSelector');
  // require('../stories/Dropdown');
  // require('../stories/Switcher');
  // require('../stories/Input');
  // require('../stories/Textarea');
  // require('../stories/Modal');
  require('../stories/ShortMessage');
  // require('../stories/ActionModal');
}

configure(loadStories, module);
