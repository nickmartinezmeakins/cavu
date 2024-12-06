import { mount } from '@vue/test-utils';
import DeparturesBoard from '../DeparturesBoard.vue';
import DepartureStatus from '../DepartureStatus.vue';
import { describe, expect, it } from 'vitest';
describe('DeparturesBoard.vue', () => {
    const soonestDepartures = [
        {
            flightNumber: 'AB123',
            scheduledDepartureDateTime: '2023-12-05T15:00:00Z',
            arrivalAirport: { cityName: 'New York', code: 'JFK' },
            airline: { name: 'Airline A' },
            departureGate: { number: '12', action: 'Boarding' },
        },
        {
            flightNumber: 'CD456',
            scheduledDepartureDateTime: '2023-12-05T16:30:00Z',
            arrivalAirport: { cityName: 'London', code: 'LHR' },
            airline: { name: 'Airline B' },
            departureGate: { number: '5', action: 'Departed' },
        },
    ];
    const formatTime = (dateTime) => {
        const date = new Date(dateTime);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    };
    it('renders the departures board header correctly', () => {
        const wrapper = mount(DeparturesBoard, {
            props: {
                soonestDepartures,
                formatTime,
            },
        });
        const header = wrapper.find('header');
        expect(header.text()).toContain('Departures');
        const img = header.find('img');
        const imgSrc = img.attributes('src');
        // Check if imgSrc is defined before proceeding
        const isSvgPath = imgSrc === '/departures.svg';
        const isBase64Encoded = imgSrc?.startsWith('data:image/svg+xml;base64,') || false;
        const isValidSrc = imgSrc && imgSrc.length > 0;
        expect(isSvgPath || isBase64Encoded || isValidSrc).toBe(true);
        expect(img.attributes('alt')).toBe('');
    });
    it('renders the table header for departures', () => {
        const wrapper = mount(DeparturesBoard, {
            props: {
                soonestDepartures,
                formatTime,
            },
        });
        const headers = wrapper.findAll('.lg\\:grid p');
        const expectedHeaders = ['Departure Time', 'City Name', 'Code', 'Airline', 'Gate', 'Status'];
        headers.forEach((header, index) => {
            expect(header.text()).toContain(expectedHeaders[index]);
        });
    });
    it('renders the departure cards with correct data', () => {
        const wrapper = mount(DeparturesBoard, {
            props: {
                soonestDepartures,
                formatTime,
            },
        });
        const cards = wrapper.findAll('.departure-card');
        expect(cards).toHaveLength(soonestDepartures.length);
        cards.forEach((card, index) => {
            const departure = soonestDepartures[index];
            const columns = card.findAll('p');
            expect(columns[0].text()).toBe(formatTime(departure.scheduledDepartureDateTime));
            expect(columns[1].text()).toBe(departure.arrivalAirport.cityName);
            expect(columns[2].text()).toBe(departure.arrivalAirport.code);
            expect(columns[3].text()).toBe(departure.airline.name);
            expect(columns[4].text()).toBe(departure.departureGate.number);
            const statusComponent = card.findComponent(DepartureStatus);
            expect(statusComponent.exists()).toBe(true);
            expect(statusComponent.props('action')).toBe(departure.departureGate.action);
        });
    });
});
