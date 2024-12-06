<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{
  soonestDepartures: Array<{
    flightNumber: string
    arrivalAirport: { cityName: string }
  }>
}>()

const emit = defineEmits<{
  (event: 'updateStatus', flightNumber: string, status: string): void
}>()

const selectedFlight = ref<string>('')
const updatedStatus = ref<string>('')
const customStatus = ref<string>('')

// Computed property to check form validity
const isFormValid = computed(() => {
  if (!selectedFlight.value || !updatedStatus.value) {
    return false
  }
  if (updatedStatus.value === 'custom' && !customStatus.value.trim()) {
    return false
  }
  return true
})

const updateFlightStatus = () => {
  if (!selectedFlight.value || !updatedStatus.value) {
    alert('Please select a flight and provide a status.')
    return
  }

  const statusToEmit =
    updatedStatus.value === 'custom' ? customStatus.value.trim() : updatedStatus.value.trim()

  if (!statusToEmit) {
    alert('Please provide a custom status.')
    return
  }

  emit('updateStatus', selectedFlight.value, statusToEmit)

  selectedFlight.value = ''
  updatedStatus.value = ''
  customStatus.value = ''
}
</script>

<template>
  <div class="max-w-2xl mx-auto w-full my-10">
    <header class="bg-yellow text-black p-2.5 rounded-t-sm">
      <h4>Update Flight Status</h4>
    </header>
    <form
      @submit.prevent="updateFlightStatus"
      class="bg-white p-5 rounded-b-sm"
    >
      <div class="mb-4">
        <label
          for="flight"
          class="block text-black mb-2"
        >Select Flight:</label>
        <select
          id="flight"
          v-model="selectedFlight"
          class="w-full p-2.5 border border-gray-300 rounded-md text-black"
        >
          <option
            value=""
            disabled
          >Select a flight</option>
          <option
            v-for="departure in soonestDepartures"
            :key="departure.flightNumber"
            :value="departure.flightNumber"
          >
            {{ departure.flightNumber }} - {{ departure.arrivalAirport.cityName }}
          </option>
        </select>
      </div>

      <div class="mb-4">
        <label
          for="status"
          class="block text-black mb-2"
        >Status:</label>
        <select
          id="status"
          v-model="updatedStatus"
          class="w-full p-2.5 border border-gray-300 rounded-md text-black"
        >
          <option
            value=""
            disabled
          >Select a status</option>
          <option value="gate open">Gate Open</option>
          <option value="boarding">Boarding</option>
          <option value="final call">Final Call</option>
          <option value="flight closing">Flight Closing</option>
          <option value="Departed">Departed</option>
          <option value="Diverted">Diverted</option>
          <option value="Delayed">Delayed</option>
          <option value="Cancelled">Cancelled</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      <div
        v-if="updatedStatus === 'custom'"
        class="mb-4"
      >
        <label
          for="custom-status"
          class="block text-black mb-2"
        >Custom Status:</label>
        <input
          id="custom-status"
          type="text"
          v-model="customStatus"
          placeholder="Enter custom status"
          class="w-full p-2.5 border border-gray-300 rounded-md text-black"
        />
      </div>

      <button
        type="submit"
        class="bg-yellow text-black px-5 py-2.5 rounded-md hover:bg-yellow-dark disabled:cursor-not-allowed disabled:opacity-50"
        :disabled="!isFormValid"
      >
        Update Status
      </button>
    </form>
  </div>
</template>
