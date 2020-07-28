<template>
  <div class="home">
    <div>{{title}}</div>
    <div>{{changePeople}}</div>
    <button @click="change">mutations点我</button>
    <button @click="btnSync">actions点我</button>
    <button @click="btnPromise">promise点我</button>
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
    },
    changePeople(){
      return this.$store.getters.changePeople
    }
  },
  methods:{ 
      change(){
        // this.$store.commit('getParam','hello')
        this.$store.commit('user/getParam','helloB')
      },
      btnSync(){
        this.$store.dispatch('getParamSync','nb')
      },
      async btnPromise(){
        const res= await this.$store.dispatch('getParamSync','pormise')
        console.log(res)
      }
  }
}
</script>
