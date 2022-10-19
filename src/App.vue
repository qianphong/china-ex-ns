<script setup lang="ts"></script>

<template>
  <div h-screen relative bg="primary dark:#222 op-60">
    <Navbar h="16" />
    <div relative h="[calc(100%-4rem)]">
      <SwitchType />
      <AMap />
      <Scoreboard />
    </div>
  </div>
</template>
