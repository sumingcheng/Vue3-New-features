<template>
  <div class="home">
    {{ reactiveData.data }}
    <button @click="changeData">+5</button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
// reactive 响应式数据
import {reactive} from "vue";

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup() {
    let reactiveData = reactive({
      data: 10
    })
    const changeData = () => {
      reactiveData.data += 5
    }
    return {reactiveData, changeData}
  }
}
</script>
