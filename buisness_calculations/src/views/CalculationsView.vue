<script setup>
import Drop from "@/components/DropdownItem.vue";
</script>

<template>
  <div id="VueCalculate">
    <div class="calculation_cont_wrapper">
      <div class="calc">
        <h1>Let's see...</h1>
      </div>
      <div class="calculation_cont">
        <div class="calculation_input_cont">
          <div class="calculation_fp_cont">
            <input
              type="number"
              name=""
              id="moneyAmount"
              v-model="toGet"
              placeholder="amount of money $"
            />
            <div></div>
            <Drop />
          </div>
          <div></div>
          <div class="calculation_sp_cont">
            <input
              type="number"
              name=""
              id="moneyToPay"
              v-model="toPay"
              placeholder="ready to pay $"
            />
            <div></div>
            <button id="calculate_finances">Calculate</button>
          </div>
        </div>
      </div>
      <div class="createTable"></div>
    </div>
  </div>
</template>


<script>
Vue.createApp({
data: {
},
watch: {
},
computed: {

},
methods: {
  getPeriodLength() {

  },
  printTable(){

  }
}
}).mount("#VueCalculate")
</script>

<style>
/* .calculation_input_cont>input {
  padding: 10px;
} */
.calculation_fp_cont,
.calculation_sp_cont {
  display: grid;
  grid-template-columns: 2fr 0.2fr 2fr;
}
.calculation_input_cont {
  display: grid;
  grid-template-rows: 1fr 0.2fr 1fr;
  width: 80%;
  margin-top: auto;
}
#calculate_finances {
  background-color: #04aa6d;
  color: white;
  padding: 16px 24px 16px 24px;
  font-size: 16px;
  border: none;
  margin-top: 2vh;
}
.createTable {
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr;
}
@media (min-width: 1024px) {
  .calc {
    /* min-height: 100vh; */
    display: flex;
    align-items: center;
  }
}
</style>
