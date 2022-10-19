<script lang="ts" setup>
import { eventBus, isDark } from '@/state'

async function download() {
  eventBus.emit({ name: 'share' })
}
const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="w-full" bg="white dark:primary">
    <div
      class="h-full flex items-center justify-between"
      md:max-w-md
      ma
      p="y-4 x-2"
    >
      <div class="flex items-center">
        <a
          class="icon-btn"
          m="x-2"
          rel="noreferrer"
          href="https://github.com/qianphong/china-ex-ns"
          target="_blank"
          title="GitHub"
        >
          <div class="i-carbon:logo-github" />
        </a>
        <a
          class="icon-btn"
          m="x-2"
          rel="noreferrer"
          href="https://github.com/qianphong/china-ex-ns/issues"
          target="_blank"
          title="GitHub"
        >
          <div class="i-ep:question-filled" />
        </a>
      </div>
      <div text="2xl">中国制霸</div>
      <div class="flex items-center">
        <button icon-btn m="x2" @click="download">
          <div i-ep:download title="下载图片" />
        </button>
        <button icon-btn m="x2" @click="toggleDark()">
          <div i-ep-sunny dark:i-ep-moon />
        </button>
      </div>
    </div>
  </header>
</template>

<style lang=""></style>
