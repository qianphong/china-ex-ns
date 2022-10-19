<script lang="ts" setup>
import { LEVEL_LIST, PROVINCE_LIST } from '@/const'

const props = defineProps<{ idx?: number; modelValue: number }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: number): void }>()

const value = useVModel(props, 'modelValue', emit)

const provinceName = computed(() => {
  return props.idx !== undefined ? PROVINCE_LIST[props.idx] : ''
})
</script>

<template>
  <div class="font-default leading-8" w="30" text="center">
    <div leading-10 text="lg">
      {{ provinceName }}
    </div>
    <div
      v-for="(level, index) in LEVEL_LIST.slice().reverse()"
      :key="index"
      class="cursor-pointer relative"
      :style="{ backgroundColor: level.color }"
      @click="value = 5 - index"
    >
      {{ level.text }}
      <div
        v-if="value === 5 - index"
        class="absolute top-0 bottom-0 right-1 i-ep:select"
        m="a"
      />
    </div>
  </div>
</template>
