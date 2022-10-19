<script setup lang="ts">
import VChart from 'vue-echarts'
import type { ECharts } from 'echarts'
import { registerMap } from 'echarts/core'
import { saveAs } from 'file-saver'
import { LEVEL_LIST, PROVINCE_LIST } from '@/const'
import SimpleSVG from '@/assets/map/simple.svg?raw'
import NormalJSON from '@/assets/map/china.json'
import { chartType, data, eventBus, isDark, score } from '@/state'

registerMap('simple', {
  svg: SimpleSVG,
})

// 地图名称必须注册为 china 才显示南海诸岛，淦排查了半天
registerMap('china', NormalJSON as any)

const selectorRef = ref<HTMLDivElement>()
const chartRef = ref<ECharts>()

const currentIndex = ref<number>()
const currentValue = computed({
  get() {
    return isDefined(currentIndex) ? data.value[currentIndex.value] : 0
  },
  set(value) {
    isDefined(currentIndex) && (data.value[currentIndex.value] = value)
  },
})

watch(chartType, () => {
  unref(chartRef)?.clear()
})

const option = computed(() => {
  return {
    backgroundColor: 'transparent',
    title: {
      text: `分数：${score.value}`,
      left: '5%',
      bottom: '5%',
      textStyle: {
        fontSize: 45,
        fontFamily: 'jldys',
      },
    },
    tooltip: {
      show: true,
      triggerOn: 'click',
      enterable: true,
      padding: 0,
      borderWidth: 2,
      formatter(params) {
        const { name } = params as { name: string }
        currentIndex.value = PROVINCE_LIST.findIndex(item => item === name)
        return unref(selectorRef) || ''
      },
    },
    visualMap: {
      type: 'piecewise',
      right: '5%',
      bottom: '5%',
      min: -1,
      max: 5,
      itemGap: 0,
      splitNumber: 6,
      inRange: {
        color: LEVEL_LIST.map(item => item.color),
      },
      formatter(opt) {
        return LEVEL_LIST[Number(opt) + 1]?.text
      },
      itemSymbol: 'rect',
      itemHeight: 25,
      itemWidth: 60,
      textStyle: {
        fontSize: 18,
        fontFamily: 'jldys',
      },
    },
    series: [
      {
        type: 'map',
        map: chartType.value === 'normal' ? 'china' : 'simple',
        roam: true,
        label: {
          show: chartType.value === 'normal',
          fontFamily: 'jldys',
          fontSize: 20,
        },
        itemStyle: {
          borderWidth: 2,
        },
        emphasis: {
          disabled: true,
        },
        selectedMode: false,
        data: data.value.map((value, index) => ({
          name: PROVINCE_LIST[index],
          value: +value,
        })),
      },
    ],
  } as EChartsOption
})

onMounted(() => {
  if (isDefined(selectorRef))
    unref(selectorRef)?.parentNode?.removeChild(unref(selectorRef))
})

// 地图 eventbus
eventBus.on(({ name }) => {
  if (name === 'share') downLoad()
})

function downLoad() {
  const dataURL = chartRef.value?.getDataURL({
    type: 'png',
    pixelRatio: 2,
    backgroundColor: unref(isDark) ? '#333' : '#efb4b4',
  })
  if (dataURL) saveAs(dataURL, `中国制霸-${unref(chartType)}-${Date.now()}.png`)
}
</script>

<template>
  <div class="h-full">
    <VChart
      ref="chartRef"
      :theme="isDark ? 'dark' : ''"
      :option="option"
      autoresize
    />
    <div ref="selectorRef">
      <Selector v-model="currentValue" :idx="currentIndex" />
    </div>
  </div>
</template>
