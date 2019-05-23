import { storiesOf } from '@storybook/vue';
import BaseSpinner from '../components/base/BaseSpinner.vue';

storiesOf('BaseSpinner', module)
  .add('default', () => ({
    components: { BaseSpinner },
    template: `<base-spinner />`
  }));
