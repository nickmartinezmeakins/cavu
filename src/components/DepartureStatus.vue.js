import { computed } from 'vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps();
const statusStyle = computed(() => {
    const normalizedAction = props.action.trim().toLowerCase();
    // Predefined exact phrases
    if (normalizedAction === 'flight closing') {
        return { text: 'Flight Closing', border: 'border-orange', color: 'text-black' };
    }
    if (normalizedAction === 'boarding') {
        return { text: 'Boarding', border: 'border-green', color: 'text-green' };
    }
    if (normalizedAction === 'final call') {
        return { text: 'Final Call', border: 'border-orange', color: 'text-orange' };
    }
    if (normalizedAction === 'gate open') {
        return { text: 'Gate Open', border: 'border-blue', color: 'text-blue' };
    }
    if (props.action.trim()) {
        return { text: props.action, border: 'border-yellow', color: 'text-black' };
    }
    return { text: 'Unknown Status', border: 'border-gray', color: 'text-gray' };
}); /* PartiallyEnd: #3632/scriptSetup.vue */
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("departure-status") }, ...{ class: (([__VLS_ctx.statusStyle.color, __VLS_ctx.statusStyle.border])) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.statusStyle.text);
    __VLS_styleScopedClasses['departure-status'];
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
            statusStyle: statusStyle,
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
