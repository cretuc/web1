const app = new Vue({
    el: '#app',
    data: {
        username: 'Cretu Cristina',
        computed: {
            calculateAge() {
                return this.currentDate - this.userDate;
            }
        }
    }
})