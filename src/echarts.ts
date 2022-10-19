import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import {
  GeoComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
} from 'echarts/components'

import { MapChart } from 'echarts/charts'

use([
  CanvasRenderer,
  GeoComponent,
  VisualMapComponent,
  ToolboxComponent,
  TooltipComponent,
  MapChart,
])
