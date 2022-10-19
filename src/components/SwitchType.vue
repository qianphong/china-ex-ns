<script lang="ts" setup>
import { chartType } from '@/state'
function setChartType(type: ChartType = 'simple') {
  chartType.value = type
}
</script>

<template>
  <div
    class="type-switch absolute top-5 left-0 right-0 cursor-pointer z-99 rounded flex overflow-hidden leading-10"
    m="x-a"
    w="50"
    text="dark:white center lg"
    border="2 primary"
    bg="white dark:transparent"
    :class="{ normal: chartType === 'normal' }"
  >
    <span w="1/2" @click="setChartType('normal')">正常地图</span>
    <span w="1/2" @click="setChartType()"> 简化地图 </span>
  </div>
</template>

<style lang="scss">
.type-switch {
  &::after {
    content: '';
    width: 50%;
    position: absolute;
    background-color: var(--c-primary);
    left: 50%;
    top: 0;
    height: 100%;
    z-index: -1;
    transition: left 0.3s;
  }
  &.normal {
    &::after {
      left: 0;
    }
  }
}
</style>
