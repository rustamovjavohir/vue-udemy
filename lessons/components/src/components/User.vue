<template>
  <div>
    <button type="button" @click="onClickAge">Update age</button>
    <button type="button" @click="ageChangeFn(5)">Update age CB</button>
    <p>User age is {{ age }}</p>
  </div>
</template>
<script>
export default {
  name: "User",
  data() {
    return {};
  },
  props: {
    age: {
      type: [Number, String],
      // required: true,
      default: 20,
      validator(value) {
        return value < 50;
      },
    },
    increseAge: Function,
    ageChangeFn: {
      type: Function,
    },
  },
  emits: ["age-change"],
  methods: {
    onClickAge() {
      this.$emit("age-change", 2, this.age);
    },
  },
};
</script>
<style lang="scss"></style>
