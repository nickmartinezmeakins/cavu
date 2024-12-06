import { ref, computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps();
const emit = defineEmits();
const selectedFlight = ref('');
const updatedStatus = ref('');
const customStatus = ref('');
// Computed property to check form validity
const isFormValid = computed(() => {
    if (!selectedFlight.value || !updatedStatus.value) {
        return false;
    }
    if (updatedStatus.value === 'custom' && !customStatus.value.trim()) {
        return false;
    }
    return true;
});
const updateFlightStatus = () => {
    if (!selectedFlight.value || !updatedStatus.value) {
        alert('Please select a flight and provide a status.');
        return;
    }
    const statusToEmit = updatedStatus.value === 'custom' ? customStatus.value.trim() : updatedStatus.value.trim();
    if (!statusToEmit) {
        alert('Please provide a custom status.');
        return;
    }
    emit('updateStatus', selectedFlight.value, statusToEmit);
    selectedFlight.value = '';
    updatedStatus.value = '';
    customStatus.value = '';
}; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    __typeEmits: {},
});
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-2xl mx-auto w-full my-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("bg-yellow text-black p-2.5 rounded-t-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.updateFlightStatus) }, ...{ class: ("bg-white p-5 rounded-b-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("flight"), ...{ class: ("block text-black mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ id: ("flight"), value: ((__VLS_ctx.selectedFlight)), ...{ class: ("w-full p-2.5 border border-gray-300 rounded-md text-black") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), disabled: (true), });
    for (const [departure] of __VLS_getVForSourceType((__VLS_ctx.soonestDepartures))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((departure.flightNumber)), value: ((departure.flightNumber)), });
        (departure.flightNumber);
        (departure.arrivalAirport.cityName);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("status"), ...{ class: ("block text-black mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ id: ("status"), value: ((__VLS_ctx.updatedStatus)), ...{ class: ("w-full p-2.5 border border-gray-300 rounded-md text-black") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), disabled: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("gate open"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("boarding"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("final call"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("flight closing"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Departed"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Diverted"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Delayed"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("Cancelled"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("custom"), });
    if (__VLS_ctx.updatedStatus === 'custom') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("custom-status"), ...{ class: ("block text-black mb-2") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("custom-status"), type: ("text"), value: ((__VLS_ctx.customStatus)), placeholder: ("Enter custom status"), ...{ class: ("w-full p-2.5 border border-gray-300 rounded-md text-black") }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("bg-yellow text-black px-5 py-2.5 rounded-md hover:bg-yellow-dark disabled:cursor-not-allowed disabled:opacity-50") }, disabled: ((!__VLS_ctx.isFormValid)), });
    __VLS_styleScopedClasses['max-w-2xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['my-10'];
    __VLS_styleScopedClasses['bg-yellow'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['p-2.5'];
    __VLS_styleScopedClasses['rounded-t-sm'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['p-5'];
    __VLS_styleScopedClasses['rounded-b-sm'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2.5'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2.5'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['p-2.5'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-300'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['bg-yellow'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['px-5'];
    __VLS_styleScopedClasses['py-2.5'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['hover:bg-yellow-dark'];
    __VLS_styleScopedClasses['disabled:cursor-not-allowed'];
    __VLS_styleScopedClasses['disabled:opacity-50'];
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
            selectedFlight: selectedFlight,
            updatedStatus: updatedStatus,
            customStatus: customStatus,
            isFormValid: isFormValid,
            updateFlightStatus: updateFlightStatus,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
