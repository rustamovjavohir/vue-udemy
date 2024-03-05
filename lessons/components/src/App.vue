<template>
  <Greeting :age="age" />
  <User :age="age" @age-change="increseAge" :ageChangeFn="updateAgeCB" />
</template>
<script>
import Greeting from "@/components/Greeting.vue";
import User from "@/components/User.vue";
export default {
  name: "App",
  data() {
    return {
      msg: "Hello world!",
      age: 23,
    };
  },
  components: {
    Greeting,
    User,
  },
  methods: {
    increseAge(increse, age2) {
      this.age += increse;
      console.log(age2);
    },
    updateAgeCB(num) {
      this.age += num;
    },
  },
};
</script>

<style></style>
