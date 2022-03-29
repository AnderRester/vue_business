import { createApp } from "vue";
import calculationApp from "./views/CalculationsView.vue";

const calculationApp = createApp({
    data() {
        return {
            toPay: 0,
            toGet: 0,
            periodChoice: undefined,
            temp: 0
        };
    },
    methods: {
        getTheAmount() {
            return this.toPay = this.toGet / this.periodChoice;
        },
    },
});
calculationApp.mount("#calculationApp");