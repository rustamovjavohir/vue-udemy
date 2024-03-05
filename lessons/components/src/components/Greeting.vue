<template>
  <div>
    <p v-if="age > 25">{{ msg }}</p>
    <p v-else>You must be 25 year or older to view this message</p>
  </div>
</template>
<script>
export default {
  name: "Greeting",
  data() {
    return {
      msg: "Hello world",
    };
  },
  props: {
    age: Number,
  },
};
</script>
<style scoped lang="scss">
p {
  color: red;
  &:hover {
    color: darken($color: #6144cc, $amount: 15);
  }
}
</style>
