<template>
  <transition name="fade">
    <div class="result">
      <div class="title" :key="`title`">{{ results[resultIndex].title }}</div>
      <div class="desc" :key="`desc`">{{ results[resultIndex].desc }}</div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    results: {},
    totalCorrect: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    resultIndex() {
      let index = 0;

      this.results.forEach((e, i) => {
        if (e.min <= this.totalCorrect && e.max >= this.totalCorrect) {
          index = i;
        }
      });
      return index;
    },
  },
};
</script>
<style></style>
