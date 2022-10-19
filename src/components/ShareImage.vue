<script lang="ts" setup>
// import { toPng } from 'html-to-image'
// import { saveAs } from 'file-saver'
// import { chartType } from '@/state'
async function share() {
  console.log('todo')
  // try {
  //   const dataUrl = await toPng(document.body)
  //   saveAs(dataUrl, `中国制霸-${chartType}-${Date.now()}.png`)
  // } catch (err) {
  //   console.log(err)
  // }
}
</script>

<template>
  <button icon-btn m="x2" @click="share">
    <div i-ep:share title="分享" />
  </button>
</template>
