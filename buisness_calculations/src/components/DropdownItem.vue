<script setup>
import { createApp } from "vue";
</script>

<template>
    <div class="dropdown">
      <select v-model="periodChoice">
        <option :value="undefined" disabled>Выберите Период</option>
        <option :value="+1">1</option>
        <option :value="+2">2</option>
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
        <!-- <option :value="{ number: 1 }">1</option>
        <option :value="{ number: 2 }">2</option>
        <option :value="{ number: 3 }">3 Месяца</option>
        <option :value="{ number: 4 }">4 Месяца</option>
        <option :value="{ number: 5 }">5 Месяцев</option>
        <option :value="{ number: 6 }">6 Месяцев</option>
        <option :value="{ number: 7 }">7 Месяцев</option>
        <option :value="{ number: 8 }">8 Месяцев</option>
        <option :value="{ number: 9 }">9 Месяцев</option>
        <option :value="{ number: 10 }">10 Месяцев</option>
        <option :value="{ number: 11 }">11 Месяцев</option>
        <option :value="{ number: 12 }">12 Месяцев</option> -->
      </select>
    </div>
</template>

<script>
// const vueApp = createApp({
//   data() {
//     return {
//       periodChoice: 0
//     }
//   }
// })
// vueApp.mount("#vueApp")
</script>

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
