<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { type Flights, type Departure } from '../types/types'
import DepartureStatus from './DepartureStatus.vue'
import UpdateFlightStatus from './UpdateFlightStatus.vue'
import DeparturesBoard from './DeparturesBoard.vue'

const DEPARTURES_URL = import.meta.env.VITE_FLIGHTS_API

const flights = ref<Flights | null>(null)
const error = ref<string | null>(null)
const loading = ref(true)

const fetchData = async () => {
  try {
    const response = await fetch(`${DEPARTURES_URL}departures/Flightdata`)
    if (!response.ok) {
      throw new Error('Failed to fetch flight data.')
    }
    const data = await response.json()
    flights.value = data
  } catch (err: any) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})

const soonestDepartures = computed((): Departure[] => {
  if (!flights.value) return []
  return [...flights.value.allDepartures]
    .sort(
      (a, b) =>
        new Date(a.scheduledDepartureDateTime).getTime() -
        new Date(b.scheduledDepartureDateTime).getTime()
    )
    .slice(0, 15)
})

const formatTime = (dateTime: string): string => {
  const date = new Date(dateTime)
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
}

const updateFlightStatus = (flightNumber: string, status: string) => {
  const flight = flights.value?.allDepartures.find(
    (departure) => departure.flightNumber === flightNumber
  )

  if (flight) {
    flight.departureGate.action = status
    alert(`Status for flight ${flightNumber} updated to "${status}"`)
  } else {
    alert('Flight not found.')
  }
}
</script>

<template>
  <div
    v-if="loading"
    class="text-center"
  >
    <p>Loading...</p>
  </div>

  <div
    v-else-if="error"
    class="text-center text-red-500"
  >
    <p>{{ error }}</p>
  </div>

  <section
    v-else
    class="text-white min-h-screen flex w-full flex-col"
  >
    <DeparturesBoard
      :soonestDepartures="soonestDepartures"
      :formatTime="formatTime"
    />
    <UpdateFlightStatus
      :soonestDepartures="soonestDepartures"
      @updateStatus="updateFlightStatus"
    />
  </section>
</template>

<style scoped>
.departure-card {
  @apply text-center mt-5 p-2.5 rounded-md border border-white w-full grid grid-cols-3 lg:grid-cols-6 items-center;
}
</style>
