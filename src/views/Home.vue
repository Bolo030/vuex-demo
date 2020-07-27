<template>
  <div class="home">
    {{title}}
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed:{
    title(){
        return this.$store.state.title
    }
  },
  methods:{
      change(){
        this.$store.commit('getParam','hello')
      }
  }
}
</script>
