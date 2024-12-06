import DepartureStatus from './DepartureStatus.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps(); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-2xl mx-auto w-full my-10") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("bg-yellow text-black p-2.5 rounded-sm") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("flex items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/departures.svg"), alt: (""), ...{ class: ("w-8 h-8 mr-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full text-xs font-bold hidden lg:grid grid-cols-7 p-2.5 rounded-md text-center text-black bg-white mt-10 items-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("lg:col-span-2 text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("text-red") }, });
    for (const [departure] of __VLS_getVForSourceType((__VLS_ctx.soonestDepartures))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((departure.flightNumber)), ...{ class: ("departure-card") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.formatTime(departure.scheduledDepartureDateTime));
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-yellow") }, });
        (departure.arrivalAirport.cityName);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (departure.arrivalAirport.code);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (departure.airline.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-yellow") }, });
        (departure.departureGate.number);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lg:col-span-2 text-left") }, });
        // @ts-ignore
        [DepartureStatus,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(DepartureStatus, new DepartureStatus({ action: ((departure.departureGate.action)), }));
        const __VLS_1 = __VLS_0({ action: ((departure.departureGate.action)), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    __VLS_styleScopedClasses['max-w-2xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['my-10'];
    __VLS_styleScopedClasses['bg-yellow'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['p-2.5'];
    __VLS_styleScopedClasses['rounded-sm'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['w-8'];
    __VLS_styleScopedClasses['h-8'];
    __VLS_styleScopedClasses['mr-6'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['lg:grid'];
    __VLS_styleScopedClasses['grid-cols-7'];
    __VLS_styleScopedClasses['p-2.5'];
    __VLS_styleScopedClasses['rounded-md'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['mt-10'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['lg:col-span-2'];
    __VLS_styleScopedClasses['text-left'];
    __VLS_styleScopedClasses['text-red'];
    __VLS_styleScopedClasses['departure-card'];
    __VLS_styleScopedClasses['text-yellow'];
    __VLS_styleScopedClasses['text-yellow'];
    __VLS_styleScopedClasses['lg:col-span-2'];
    __VLS_styleScopedClasses['text-left'];
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
            DepartureStatus: DepartureStatus,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
