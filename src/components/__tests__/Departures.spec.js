import { mount } from '@vue/test-utils';
import Departures from '../Departures.vue';
import flushPromises from 'flush-promises';
import { describe, expect, it, vi } from 'vitest';
describe('Departures.vue', () => {
    it('renders departure cards correctly after fetching data', async () => {
        global.fetch = vi.fn(() => Promise.resolve({
            ok: true,
            json: () => Promise.resolve({
                allDepartures: [
                    {
                        flightNumber: 'AB123',
                        scheduledDepartureDateTime: '2023-12-05T15:00:00Z',
                        arrivalAirport: { name: 'Airport A' },
                        airline: { name: 'Airline A' },
                        departureGate: { action: 'Boarding' },
                    },
                    {
                        flightNumber: 'CD456',
                        scheduledDepartureDateTime: '2023-12-05T16:00:00Z',
                        arrivalAirport: { name: 'Airport B' },
                        airline: { name: 'Airline B' },
                        departureGate: { action: 'Departed' },
                    },
                ],
            }),
            headers: new Headers(),
            redirected: false,
            status: 200,
            statusText: 'OK',
            type: 'basic',
            url: '',
            clone: () => {
                return Promise.resolve(this);
            },
            body: null,
            bodyUsed: false,
            text: () => Promise.resolve(''),
            arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
            blob: () => Promise.resolve(new Blob()),
            formData: () => Promise.resolve(new FormData()),
        }));
        const wrapper = mount(Departures);
        await flushPromises();
        await wrapper.vm.$nextTick();
        const cards = wrapper.findAll('.departure-card');
        expect(cards.length).toBe(2);
        expect(cards[0].text()).toContain('15:00');
        expect(cards[0].text()).toContain('Airline A');
        expect(cards[0].text()).toContain('Boarding');
    });
    it('displays an error message when fetch fails', async () => {
        global.fetch = vi.fn(() => Promise.resolve({
            ok: false,
            json: () => Promise.reject(new Error('Failed to fetch')),
            headers: new Headers(),
            redirected: false,
            status: 500,
            statusText: 'Internal Server Error',
            type: 'basic',
            url: '',
            clone: () => {
                return Promise.resolve(this);
            },
            body: null,
            bodyUsed: false,
            text: () => Promise.resolve(''),
            arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
            blob: () => Promise.resolve(new Blob()),
            formData: () => Promise.resolve(new FormData()),
        }));
        const wrapper = mount(Departures);
        await flushPromises();
        await wrapper.vm.$nextTick();
        const error = wrapper.find('.text-red-500');
        expect(error.exists()).toBe(true);
        expect(error.text()).toContain('Failed to fetch flight data.');
    });
    it('displays loading message before data is fetched', async () => {
        const wrapper = mount(Departures);
        expect(wrapper.text()).toContain('Loading...');
        await flushPromises();
        await wrapper.vm.$nextTick();
        expect(wrapper.text()).not.toContain('Loading...');
    });
});
