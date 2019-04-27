import Hammer from 'hammerjs';

//Next line for user selection, if no present you can't select
delete Hammer.defaults.cssProps.userSelect;

export default{
  bind: function(el, binding) {
    if (typeof binding.value === "function") {
      const mc = new Hammer(el, { inputClass: Hammer.TouchInput });
      let direction;

      if (binding.modifiers.left && binding.modifiers.right) direction = Hammer.DIRECTION_HORIZONTAL;
      else if (binding.modifiers.left) direction = Hammer.DIRECTION_LEFT;
      else if (binding.modifiers.right) direction = Hammer.DIRECTION_RIGHT;
      else direction = Hammer.DIRECTION_NONE;

      mc.get("swipe").set({ direction: direction });
      mc.on("swipe", binding.value);
    }
  }
};
