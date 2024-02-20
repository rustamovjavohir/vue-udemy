let vm = Vue.createApp({
    data() {
        return {
            isPurple: false,
            selectedColor: '',
            color: 'orange',
            size: 150,
            mode: 1,
            birds: ['Pigeons', 'Eagles', 'Doves', 'Parrots'],
            people: [
                { name: 'Javohir', age: 24 },
                { name: 'Abdulaziz', age: 20 },
                { name: 'Shaxzod', age: 23 },
            ],
        }
    },
    computed: {
        circle_classes() {
            return { purple: this.isPurple }
        },
        circle_color() {
            return this.color
        }
    },
}).mount('#app')