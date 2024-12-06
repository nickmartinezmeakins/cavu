<script setup lang="ts">
import DepartureStatus from './DepartureStatus.vue'

defineProps<{
  soonestDepartures: Array<{
    flightNumber: string
    scheduledDepartureDateTime: string
    arrivalAirport: { cityName: string; code: string }
    airline: { name: string }
    departureGate: { number: string; action: string }
  }>
  formatTime: (dateTime: string) => string
}>()
</script>

<template>
  <div class="max-w-2xl mx-auto w-full my-10">
    <header class="bg-yellow text-black p-2.5 rounded-sm">
      <h3 class="flex items-center"><img
          src="/departures.svg"
          alt=""
          class="w-8 h-8 mr-6"
        />Departures</h3>
    </header>
    <div class="w-full text-xs font-bold hidden lg:grid grid-cols-7 p-2.5 rounded-md text-center text-black bg-white mt-10 items-center">
      <p>Departure Time</p>
      <p>City Name</p>
      <p>Code</p>
      <p>Airline</p>
      <p>Gate</p>
      <p class="lg:col-span-2 text-left">Status</p>
    </div>
    <ul class="text-red">
      <li
        v-for="departure in soonestDepartures"
        :key="departure.flightNumber"
        class="departure-card"
      >
        <p>{{ formatTime(departure.scheduledDepartureDateTime) }}</p>
        <p class="text-yellow">{{ departure.arrivalAirport.cityName }}</p>
        <p>{{ departure.arrivalAirport.code }}</p>
        <p>{{ departure.airline.name }}</p>
        <p class="text-yellow">{{ departure.departureGate.number }}</p>
        <div class="lg:col-span-2 lg:text-left">
          <DepartureStatus :action="departure.departureGate.action" />
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.departure-card {
  @apply text-center mt-5 p-2.5 rounded-md border border-white w-full grid grid-cols-3 lg:grid-cols-7 items-center font-semibold gap-4;
}
</style>
