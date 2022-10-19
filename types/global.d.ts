import type { EChartsOption as Option } from 'echarts'

declare global {
  type EChartsOption = Option
  type ChartType = 'normal' | 'simple'
}
