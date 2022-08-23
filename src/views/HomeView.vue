<template>
  <div class="home">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b" @select="handleSelect"
    >
      <el-menu-item index="1" @click="Home">Home</el-menu-item>
      <el-menu-item index="2" @click="About">About</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {useRouter, useRoute} from 'vue-router';

const $router = useRouter()

const $route = useRoute()

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}

// 路由
const Home = () => {
  $router.push({path: 'home'})
}
const About = () => {
  $router.push({path: 'about'})

}

</script>
