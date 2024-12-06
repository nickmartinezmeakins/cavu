<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ action: string }>()

const statusStyle = computed(() => {
  const normalizedAction = props.action.trim().toLowerCase()

  if (normalizedAction === 'flight closing') {
    return { text: 'Flight Closing', border: 'border-orange', color: 'text-black' }
  }

  if (normalizedAction === 'boarding') {
    return { text: 'Boarding', border: 'border-green', color: 'text-green' }
  }

  if (normalizedAction === 'final call') {
    return { text: 'Final Call', border: 'border-orange', color: 'text-orange' }
  }

  if (normalizedAction === 'gate open') {
    return { text: 'Gate Open', border: 'border-blue', color: 'text-blue' }
  }

  if (props.action.trim()) {
    return { text: props.action, border: 'border-yellow', color: 'text-black' }
  }

  return { text: 'Unknown Status', border: 'border-gray', color: 'text-gray' }
})
</script>

<template>
  <div
    class="departure-status"
    :class="[statusStyle.color, statusStyle.border]"
  >
    <span>{{ statusStyle.text }}</span>
  </div>
</template>

<style scoped>
.departure-status {
  @apply border border-l-8 rounded-r-full rounded-l-md font-bold text-left px-3 py-0.5 bg-white inline-block lg:min-w-32;
}
</style>
