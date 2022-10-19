import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  GeoComponent,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components'

import { MapChart } from 'echarts/charts'

use([
  CanvasRenderer,
  GeoComponent,
  VisualMapComponent,
  TooltipComponent,
  TitleComponent,
  MapChart,
])
