<script lang="ts" setup>
import { chartType } from '@/state'

function setChartType(type: ChartType = 'simple') {
  chartType.value = type
}
</script>

<template>
  <div
    class="type-switch absolute top-5% left-5% z-99 rounded-6px"
    p="1"
    text="center lg"
    bg="white op-60 dark:primary dark:op-10"
    :class="{ normal: chartType === 'normal' }"
  >
    <div flex relative w="50" h-10 leading-10>
      <span w="1/2" @click="setChartType('normal')">正常地图</span>
      <span w="1/2" @click="setChartType()"> 简化地图 </span>
    </div>
  </div>
</template>

<style lang="scss">
.type-switch {
  > div {
    cursor: pointer;
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
      border-radius: 6px;
    }
  }

  &.normal > div {
    &::after {
      left: 0;
    }
  }
}
</style>
