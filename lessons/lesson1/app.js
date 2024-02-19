const vm = Vue.createApp({
    data() {
        return {
            firstName: "Javohir",
            lastName: "Rustamov",
            middleName: "",
            age: 24,
            url: "https://www.google.com",
            raw_url: '<a href="https://www.google.com" target="_blank">Google</a>'
        }
    },
    methods: {
        increase() {
            this.age++;
        },
        updateLastName(event, msg) {
            event.preventDefault();
            console.log(msg)
            this.lastName = event.target.value;
        },
        updatemiddleName(event) {
            this.middleName = event.target.value
        }
    },
    computed: {
        fullName() {
            console.log('Full name computed property was called')
            return `${this.firstName} ${this.middleName} ${this.lastName}`
        },
    },
    watch: {
        age(newValue, oldValue) {
            setTimeout(() => {
                this.age = 24
            }, 3000)
        }
    }
}).mount('#app')


// setTimeout(() => {
//     vm.$data.firstName = "Jasur";
// }, 2000)