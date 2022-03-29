<script setup>
import { createApp } from "vue";
import "../router/index.js";
// import Drop from "@/components/DropdownItem.vue";
</script>

<template>
  <div id="calculationApp">
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
            <div class="dropdown">
              <select v-model="periodChoice">
                <option :value="undefined">Выберите Период</option>
                <option :value="+1">1 Месяц</option>
                <option :value="+2">2 Месяца</option>
                <option :value="+3">3 Месяца</option>
                <option :value="+4">4 Месяца</option>
                <option :value="+5">5 Месяцев</option>
                <option :value="+6">6 Месяцев</option>
                <option :value="+7">7 Месяцев</option>
                <option :value="+8">8 Месяцев</option>
                <option :value="+9">9 Месяцев</option>
                <option :value="+10">10 Месяцев</option>
                <option :value="+11">11 Месяцев</option>
                <option :value="+12">12 Месяцев</option>
              </select>
            </div>
            <!-- <Drop /> -->
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

      <div class="createTable">
        <div class="monthId">
          <div>ID</div>
          <hr />
          <div>{{ periodChoice }}</div>
        </div>
        <div class="amountRemains">
          <div>Remains</div>
          <hr />
          <div>{{ periodChoice }}</div>
        </div>
        <div class="amountToPay">
          <div>To pay</div>
          <hr />
          <div>{{ periodChoice }}</div>
        </div>
      </div>

      <div>{{ periodChoice }}</div>
      <div>{{ toGet }}</div>
      <div>{{ toPay }}</div>
    </div>
  </div>
</template>

<script>
// const calculationApp = createApp({
//   data() {
//     return {
//       toPay: null,
//       toGet: null,
//       periodChoice: undefined,
//     };
//   },
//   methods: {
//     getTheAmount() {},
//     changeSetting: function (index) {
//       data.settingsSelected = data.settings[index];
//     },
//   },
// });
// calculationApp.mount("#calculationApp");
</script>

<style>
.calculation_fp_cont,
.calculation_sp_cont {
  display: grid;
  grid-template-columns: 2fr 0.4fr 2fr;
  height: 4vh;
}
.calculation_input_cont {
  display: grid;
  grid-template-rows: 2fr 1fr 2fr;
  width: 40%;
}
#calculate_finances {
  background-color: #04aa6d;
  color: white;
  font-size: 16px;
  border: none;
}
.createTable {
  display: grid;
  grid-template-columns: 0.3fr 1fr 1fr;
  background: rgb(167, 167, 167);
  border: 1px solid #000;
  margin-top: 2vh;
  width: 70%;
  color: #000;
}
.monthId,
.amountRemains,
.amountToPay {
  border-right: 1px solid #000;
  padding: 6px;
  font-weight: 600;
}
@media (width: 1024px) {
  .calc {
    /* min-height: 100vh; */
    display: flex;
    align-items: center;
  }
}
</style>

<style scoped>
.dropdown > select {
  width: 100%;
  border: none;
  height: 100%;
  background: #04aa6d;
  color: rgb(255, 255, 255);
  text-align: center;
}
.dropdown > select > option {
  background: rgb(255, 255, 255);
  color: #000;
}
.dropdown > select > option:hover {
  background: rgb(228, 228, 228);
}
</style>
