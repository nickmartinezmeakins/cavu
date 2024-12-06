import { ref, computed, onMounted } from 'vue';
import UpdateFlightStatus from './UpdateFlightStatus.vue';
import DeparturesBoard from './DeparturesBoard.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const flights = ref(null);
const error = ref(null);
const loading = ref(true); // Track loading state
const fetchData = async () => {
    try {
        const response = await fetch('https://6315ae3e5b85ba9b11e4cb85.mockapi.io/departures/Flightdata');
        if (!response.ok) {
            throw new Error('Failed to fetch flight data.');
        }
        const data = await response.json();
        flights.value = data;
    }
    catch (err) {
        error.value = err.message;
    }
    finally {
        loading.value = false; // Ensure loading is set to false after fetch attempt
    }
};
onMounted(() => {
    fetchData();
});
const soonestDepartures = computed(() => {
    if (!flights.value)
        return [];
    return [...flights.value.allDepartures]
        .sort((a, b) => new Date(a.scheduledDepartureDateTime).getTime() -
        new Date(b.scheduledDepartureDateTime).getTime())
        .slice(0, 15);
});
const formatTime = (dateTime) => {
    const date = new Date(dateTime);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
};
const updateFlightStatus = (flightNumber, status) => {
    const flight = flights.value?.allDepartures.find((departure) => departure.flightNumber === flightNumber);
    if (flight) {
        flight.departureGate.action = status;
        alert(`Status for flight ${flightNumber} updated to "${status}"`);
    }
    else {
        alert('Flight not found.');
    }
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    if (__VLS_ctx.loading) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    else if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-center text-red-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.error);
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({ ...{ class: ("text-white min-h-screen flex w-full flex-col") }, });
        // @ts-ignore
        [DeparturesBoard,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(DeparturesBoard, new DeparturesBoard({ soonestDepartures: ((__VLS_ctx.soonestDepartures)), formatTime: ((__VLS_ctx.formatTime)), }));
        const __VLS_1 = __VLS_0({ soonestDepartures: ((__VLS_ctx.soonestDepartures)), formatTime: ((__VLS_ctx.formatTime)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        // @ts-ignore
        [UpdateFlightStatus,];
        // @ts-ignore
        const __VLS_5 = __VLS_asFunctionalComponent(UpdateFlightStatus, new UpdateFlightStatus({ ...{ 'onUpdateStatus': {} }, soonestDepartures: ((__VLS_ctx.soonestDepartures)), }));
        const __VLS_6 = __VLS_5({ ...{ 'onUpdateStatus': {} }, soonestDepartures: ((__VLS_ctx.soonestDepartures)), }, ...__VLS_functionalComponentArgsRest(__VLS_5));
        let __VLS_10;
        const __VLS_11 = {
            onUpdateStatus: (__VLS_ctx.updateFlightStatus)
        };
        let __VLS_7;
        let __VLS_8;
        var __VLS_9;
    }
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex-col'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            UpdateFlightStatus: UpdateFlightStatus,
            DeparturesBoard: DeparturesBoard,
            error: error,
            loading: loading,
            soonestDepartures: soonestDepartures,
            formatTime: formatTime,
            updateFlightStatus: updateFlightStatus,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
