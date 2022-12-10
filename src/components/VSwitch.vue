<script>
import { defineComponent, h } from 'vue'
export default defineComponent({
  props: ['case'],
  setup(props, { slots }) {
    console.log(slots)
    return () => {
      console.log(slots.bar())
      if(slots[props.case]) {
        return slots[props.case]()
      }

      if (slots.default) {
        return slots.default()
      }
    }
  },

})
</script>

<style>
</style>