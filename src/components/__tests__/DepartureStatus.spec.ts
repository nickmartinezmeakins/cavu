import { mount } from '@vue/test-utils'
import DepartureStatus from '../DepartureStatus.vue'
import { describe, expect, it, vi } from 'vitest'

describe('DepartureStatus.vue', () => {
  it('renders the correct style for "Flight Closing"', () => {
    const wrapper = mount(DepartureStatus, {
      props: {
        action: 'Flight Closing',
      },
    })

    const statusDiv = wrapper.find('.departure-status')
    expect(statusDiv.text()).toBe('Flight Closing')
    expect(statusDiv.classes()).toContain('border-orange')
    expect(statusDiv.classes()).toContain('text-black')
  })

  it('renders the correct style for "Boarding"', () => {
    const wrapper = mount(DepartureStatus, {
      props: {
        action: 'Boarding',
      },
    })

    const statusDiv = wrapper.find('.departure-status')
    expect(statusDiv.text()).toBe('Boarding')
    expect(statusDiv.classes()).toContain('border-green')
    expect(statusDiv.classes()).toContain('text-green')
  })

  it('renders the correct style for "Final Call"', () => {
    const wrapper = mount(DepartureStatus, {
      props: {
        action: 'Final Call',
      },
    })

    const statusDiv = wrapper.find('.departure-status')
    expect(statusDiv.text()).toBe('Final Call')
    expect(statusDiv.classes()).toContain('border-orange')
    expect(statusDiv.classes()).toContain('text-orange')
  })

  it('renders the correct style for "Gate Open"', () => {
    const wrapper = mount(DepartureStatus, {
      props: {
        action: 'Gate Open',
      },
    })

    const statusDiv = wrapper.find('.departure-status')
    expect(statusDiv.text()).toBe('Gate Open')
    expect(statusDiv.classes()).toContain('border-blue')
    expect(statusDiv.classes()).toContain('text-blue')
  })

  it('renders a custom status style for any other non-empty action', () => {
    const wrapper = mount(DepartureStatus, {
      props: {
        action: 'Delayed',
      },
    })

    const statusDiv = wrapper.find('.departure-status')
    expect(statusDiv.text()).toBe('Delayed')
    expect(statusDiv.classes()).toContain('border-yellow')
    expect(statusDiv.classes()).toContain('text-black')
  })

  it('renders the default style for an empty action', () => {
    const wrapper = mount(DepartureStatus, {
      props: {
        action: '',
      },
    })

    const statusDiv = wrapper.find('.departure-status')
    expect(statusDiv.text()).toBe('Unknown Status')
    expect(statusDiv.classes()).toContain('border-gray')
    expect(statusDiv.classes()).toContain('text-gray')
  })

  it('ignores extra whitespace and normalizes action input', () => {
    const wrapper = mount(DepartureStatus, {
      props: {
        action: '   Boarding  ',
      },
    })

    const statusDiv = wrapper.find('.departure-status')
    expect(statusDiv.text()).toBe('Boarding')
    expect(statusDiv.classes()).toContain('border-green')
    expect(statusDiv.classes()).toContain('text-green')
  })
})
