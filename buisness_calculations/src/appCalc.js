import { createApp } from "vue";

const calculationApp = createApp({
    data() {
        return {
            toPay: null,
            toGet: null,
            periodChoice: undefined,
        };
    },
    methods: {
        getTheAmount() {},
    },
});
calculationApp.mount("#calculationApp");