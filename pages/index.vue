<template>
  <Tutorial />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  mounted() {
    // this.$store.dispatch('test')
    // this.layer1Test()
    // this.layer2Test()
    // this.$store.dispatch('layer3/test')
  },
  // methods: {
  //   ...mapActions({
  //     layer1Test: 'layer1/test',
  //     layer2Test: 'layer2/test',
  //   }),
  // },
}
</script>
