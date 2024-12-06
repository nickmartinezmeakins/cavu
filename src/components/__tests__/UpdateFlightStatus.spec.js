import { mount } from '@vue/test-utils';
import UpdateFlightStatus from '../UpdateFlightStatus.vue';
import { describe, expect, it, vi } from 'vitest';
describe('UpdateFlightStatus.vue', () => {
    const soonestDepartures = [
        { flightNumber: 'AB123', arrivalAirport: { cityName: 'New York' } },
        { flightNumber: 'CD456', arrivalAirport: { cityName: 'London' } },
    ];
    it('renders the form correctly', () => {
        const soonestDepartures = [
            { flightNumber: 'AB123', arrivalAirport: { cityName: 'City A' } },
            { flightNumber: 'CD456', arrivalAirport: { cityName: 'City B' } },
        ];
        const wrapper = mount(UpdateFlightStatus, {
            props: { soonestDepartures },
        });
        const totalOptions = soonestDepartures.length + 11;
        expect(wrapper.findAll('option')).toHaveLength(totalOptions);
    });
    it('validates the form correctly', async () => {
        const wrapper = mount(UpdateFlightStatus, {
            props: { soonestDepartures },
        });
        const button = wrapper.find('button');
        expect(button.element.disabled).toBe(true);
        await wrapper.find('#flight').setValue('AB123');
        expect(button.element.disabled).toBe(true);
        await wrapper.find('#status').setValue('boarding');
        expect(button.element.disabled).toBe(false);
        await wrapper.find('#status').setValue('custom');
        expect(button.element.disabled).toBe(true);
        await wrapper.find('#custom-status').setValue('Ready for Departure');
        expect(button.element.disabled).toBe(false);
    });
    it('emits the correct event for predefined status', async () => {
        const wrapper = mount(UpdateFlightStatus, {
            props: { soonestDepartures },
        });
        await wrapper.find('#flight').setValue('AB123');
        await wrapper.find('#status').setValue('boarding');
        await wrapper.find('form').trigger('submit.prevent');
        expect(wrapper.emitted('updateStatus')).toHaveLength(1);
        expect(wrapper.emitted('updateStatus')[0]).toEqual(['AB123', 'boarding']);
    });
    it('emits the correct event for custom status', async () => {
        const wrapper = mount(UpdateFlightStatus, {
            props: { soonestDepartures },
        });
        await wrapper.find('#flight').setValue('CD456');
        await wrapper.find('#status').setValue('custom');
        await wrapper.find('#custom-status').setValue('Ready for Departure');
        await wrapper.find('form').trigger('submit.prevent');
        expect(wrapper.emitted('updateStatus')).toHaveLength(1);
        expect(wrapper.emitted('updateStatus')[0]).toEqual(['CD456', 'Ready for Departure']);
    });
    it('resets the form after submission', async () => {
        const wrapper = mount(UpdateFlightStatus, {
            props: { soonestDepartures },
        });
        await wrapper.find('#flight').setValue('AB123');
        await wrapper.find('#status').setValue('boarding');
        await wrapper.find('form').trigger('submit.prevent');
        const flightSelect = wrapper.find('#flight');
        const statusSelect = wrapper.find('#status');
        const customStatusInput = wrapper.find('#custom-status');
        expect(flightSelect.element.value).toBe('');
        expect(statusSelect.element.value).toBe('');
        expect(customStatusInput.exists() ? customStatusInput.element.value : '').toBe('');
    });
    it('alerts when the form is invalid', async () => {
        const wrapper = mount(UpdateFlightStatus, {
            props: { soonestDepartures },
        });
        const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => { });
        await wrapper.find('form').trigger('submit.prevent');
        expect(alertMock).toHaveBeenCalledWith('Please select a flight and provide a status.');
        await wrapper.find('#flight').setValue('AB123');
        await wrapper.find('#status').setValue('custom');
        await wrapper.find('form').trigger('submit.prevent');
        expect(alertMock).toHaveBeenCalledWith('Please provide a custom status.');
        alertMock.mockRestore();
    });
});
