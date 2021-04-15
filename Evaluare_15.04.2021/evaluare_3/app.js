const app = new Vue({
    el: '#app',
    data: {
        experienta: '',
        limbaj: '',
        salariu: 0
    },
    watch: {
        experienta() {
            this.salariu = this.calcSalary(this.limbaj, this.experienta);
        },
        limbaj() {
            this.salariu = this.calcSalary(this.limbaj, this.experienta);
        }
    },
    methods: {
        calcSalariu(limbaj, experienta) {
            let coeficent = 0;
            switch (limbaj) {
                case 'JS':
                    coeficent = 1;
                    break;
                case 'Python':
                    coeficent = 0.7;
                    break;
                case 'Java':
                    coeficent = 1.3;
                    break;
            }

            let Salariu = 0;
            if (experienta === '1') {
                Salariu = 10000;
            } else if (experienta === '2') {
                Salariu = 12000;
            } else if (experienta === '3') {
                Salariu = 13500;
            } else if (experienta === '4') {
                Salariu = 14000;
            } else if (experienta === '5') {
                Salariu = 15000;
            }
            return Salariu * coeficent;
        }
    }
})