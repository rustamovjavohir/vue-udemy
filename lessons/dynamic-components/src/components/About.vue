<template>
  <h1>About Page</h1>
</template>
<script>
export default {
  unmounted() {
    console.log("About unmounted");
  },
  activated() {
    console.log("About vue activated");
  },
  deactivated() {
    console.log("About vue deactivated");
  },
};
</script>
<style></style>
