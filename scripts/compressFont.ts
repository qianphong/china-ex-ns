import Fontmin from 'fontmin'
import { LEVEL_LIST, PROVINCE_LIST } from '../src/const'

const SAFE_LIST = ['中国制霸', '正常地图', '简化地图', '1234567890', '分数：']

const text =
  PROVINCE_LIST.join('') +
  LEVEL_LIST.map(l => l.text).join('') +
  SAFE_LIST.join('')

const fontmin = new Fontmin()
  .src('scripts/source/*.ttf')
  .use(
    Fontmin.glyph({
      text,
      hinting: false, // keep ttf hint info (fpgm, prep, cvt). default = true
    }),
  )
  .dest('public/assets/fonts')

fontmin.run((err, files) => {
  if (err) throw err

  console.log(files[0])
  // => { contents: <Buffer 00 01 00 ...> }
})
