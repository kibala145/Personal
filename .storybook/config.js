import { configure } from '@storybook/vue';

function loadStories() {
  require('../src/stories/BaseSpinner.js');
  require('../src/stories/BaseSwitch.js');
  require('../src/stories/CustomTransition.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
