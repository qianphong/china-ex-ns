import { CACHE_KEY, CHART_TYPE, PROVINCE_LIST } from '@/const'

export const isDark = useDark()

export const chartType = useLocalStorage<ChartType>(CHART_TYPE, 'normal')

export const data = useLocalStorage<number[]>(
  CACHE_KEY,
  PROVINCE_LIST.map(() => 0),
  {
    serializer: {
      read(v) {
        return v.split('').map(Number)
      },
      write(v) {
        return v.join('')
      },
    },
  },
)

export const score = computed(() => {
  return data.value.reduce((acc, cur) => acc + cur, 0)
})
