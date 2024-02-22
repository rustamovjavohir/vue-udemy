let vm = Vue.createApp({
  // data() {
  //   return {
  //     message: "Hello world!"
  //   }
  // },
  // beforeCreate() {
  //   console.log('beforeCreate() function called', this.message)
  // },
  // created() {
  //   console.log('created function called', this.message)

  // },
  // beforeMount() {
  //   console.log('beforeMount function called', this.$el)
  // },
  // mounted() {
  //   console.log('mounted function called', this.$el)
  //   setTimeout(() => {
  //     this.message = "salom"
  //   }, 2000)
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate function called',)
  // },
  // updated() {
  //   console.log('updated function called',)
  // },
  // beforeUnmount() { 
  //   console.log('beforeUnmount function called',)
  // },
  // unmounted() {
  //   console.log('unmounted function called',)
  // },
  // template: `{{ message }} {{ message }}`
})

vm.component('hello', {
  data() {
    return {
      message2: 'Hello world2'
    }
  },
  template: '<h1> {{ message2 }} </h1>'
})

vm.mount('#app')

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000)