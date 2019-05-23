import { storiesOf } from '@storybook/vue';
import CustomTransition from '../components/helpers/CustomTransition.vue';
import {action} from "@storybook/addon-actions";
import {withKnobs, boolean, select, text} from "@storybook/addon-knobs";

const story = storiesOf('CustomTransition', module);

story.addDecorator(withKnobs);

story.add('default', () => ({
  components: { CustomTransition },
  props: {
    value: {
      default: boolean('value', false, 'DATA')
    },
    transitionMode: {
      default: select('transitionMode', {
        outIn: 'out-in',
        inOut: 'in-out',
      }, 'out-in', 'UI')
    },
    transitionName: {
      default: select('transitionName', {
        none: null,
        expand: 'expand',
        fade: 'fade',
        bounce: 'bounce',
      }, 'expand', 'UI')
    },
    text1: {
      default: text('text1', 'custom text 1', 'DATA')
    },
    text2: {
      default: text('text2', 'custom text 2', 'DATA')
    },
  },
  template: `
<custom-transition 
  :transition-name="transitionName" 
  :transition-mode="transitionMode"
  >
      <div v-if="value" :key="1">
        {{text1}}
      </div>
      <div v-if="!value" :key="2">
        {{text2}}
      </div>
    </custom-transition>
`
}));
