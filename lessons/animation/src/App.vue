<template>
  <button type="button" @click="flag = !flag">Toggle</button>
  <!-- <transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello world</h2>
    <h2 v-else key="secondary">Another hello</h2>
  </transition> -->

  <!-- <transition name="zoom" type="animation" appear>
    <h2 v-if="flag" key="main">Hello world</h2>
  </transition> -->
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="afterLeave"
    @leage="leave"
    @after-leave="afterLeave"
  >
    <h2 v-if="flag">Hey</h2>
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: true,
    };
  },
};
</script>

<style scoped>
h2 {
  height: 400px;
  padding: 20px;
  margin: 20px;
}

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 1s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 1s linear;
}
.zoom-enter-from {
  opacity: 0;
}

.zoom-leace-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.25s linear;
}
.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;
}
</style>
