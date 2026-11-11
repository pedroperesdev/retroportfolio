<template>
  <div>
    <audio id="main-music" src="/audio/music.mp3" loop preload="auto"/>
    <audio id="click-sound" src="/audio/select_new.wav" preload="auto"/>
    <audio id="computer-boot" src="/audio/computer_boot.wav" preload="auto"/>
    <audio id="initial-beep" src="/audio/initial_beep.wav" preload="auto"/>
    <audio id="desktop-sound" src="/audio/desktop_sound.mp3" preload="auto"/>
    <audio id="bubbles-sound" src="/audio/bubbles.mp3" preload="auto"/>
    <audio id="click-pc" src="/audio/click_pc.wav" preload="auto"/>
    <audio id="dog-sound" src="/audio/dog.wav" preload="auto"/>
    <audio id="flag-sound" src="/audio/flag.wav" preload="auto"/>
    <audio id="explosion-sound" src="/audio/explosion.wav" preload="auto"/>
    <NuxtPage/>
  </div>
</template>

<script setup lang="ts">
// preload hover sprites so they don't flicker on first hover
useHead({
  link: ['console_hover', 'pc_hover', 'yes_hover', 'no_hover'].map(name => ({
    rel: 'preload', as: 'image', href: `/sprites/${name}.png`
  }))
})
</script>
