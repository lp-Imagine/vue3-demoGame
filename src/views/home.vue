<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <div class="go_path">
    <span class="btn" @click="todoClick">todoList</span>
    <span class="btn" @click="goGame">Game</span>
  </div>
</template>

<script lang="ts">
import HelloWorld from '../components/HelloWorld.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup(props, ctx) {
    const router = useRouter();
    const todoClick = () => {
      let routeData = router.resolve({
        path: '/todolist'
      });
      window.open(routeData.href, '_blank');

      console.log(routeData.href);
    };
    const goGame = () => {
      let gameRoute = router.resolve({
        path: '/game'
      });
      window.open(gameRoute.href, '_blank');
    };
    return {
      todoClick,
      goGame
    };
  }
};
</script>

<style>
  .go_path{
    display: flex;
    justify-content:center;
  }
  .btn{
    width:100px;
    height:60px;
    margin:20px 40px;
    background:royalblue;
    line-height: 60px;
    text-align: center;
    border-radius: 15px;
    font-size:16px;
    font-weight: bolder;
    color:#fff;
    cursor: pointer;
  }
</style>
