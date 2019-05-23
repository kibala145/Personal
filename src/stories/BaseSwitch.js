import { storiesOf } from '@storybook/vue';
import BaseSwitch from '../components/base/BaseSwitch.vue';
import {action} from "@storybook/addon-actions";
import {withKnobs, boolean, text, select} from "@storybook/addon-knobs";

const story = storiesOf('BaseSwitch', module);

story.addDecorator(withKnobs);

story.add('default', () => ({
  components: { BaseSwitch },
  props: {
    value: {
      default: boolean('value', false, 'DATA')
    },
    id: {
      default: text('id', 'default', 'DATA')
    },
    color: {
      default: select('color', {
        orange: 'orange',
        blue: 'blue'
      }, 'orange', 'UI')
    },
    round: {
      default: boolean('round', false, 'UI')
    }
  },
  methods: {
    update: action('value updated')
  },
  template: `<base-switch 
              :id="id" 
              :value="value" 
              :color="color"
              :round="round"
              @update:value="update"/>`
}));
