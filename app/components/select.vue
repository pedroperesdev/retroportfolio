<template>
  <div class="flex flex-col items-center absolute w-[640px] h-[640px] z-10 stripes">
    <div class="mt-30 text-bg px-4 prevent-select blink">
        <h1 class="text-3xl text-purple-200 font-pixel">Select a file to run</h1>
    </div>
    <div class="flex items-end gap-34 mt-20">
        <div class="flex flex-col gap-4">
            <div class="icon-cv" @click="$emit('openLink', 'cv')"/>
            <div class="flex justify-center text-bg prevent-select">
                <h1 class="text-xl text-purple-200 font-pixel">CV.pdf</h1>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <div class="icon-play ml-6" @click="$emit('changeWindow', 'game')"/>
            <div class="flex text-bg px-4 justify-center prevent-select">
                <h1 class="text-xl text-purple-200 font-pixel">Game.exe</h1>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

.icon-cv {
    image-rendering: pixelated;
    width: 88px;
    height: 112px;
    background-image: url('sprites/cv.png');
    background-size: 88px 112px ;
}

.icon-cv:hover {
    background-image: url('sprites/cv_border.png');
    transform: scale(1.2);
}

.icon-play {
    image-rendering: pixelated;
    width: 88px;
    height: 152px;
    background-image: url('sprites/playerfront.png');
    background-size: 88px 152px ;
}

.icon-play:hover {
    background-image: url('sprites/playerfront_border.png');
    transform: scale(1.2);
}

.text-bg {
    background-color: rgba(30, 25, 32, 0.8);
}

.blink {
    animation-name: blink;
    animation-duration: 2s;
    animation-timing-function: steps(1);
    animation-iteration-count: infinite;
}
.blink-hover:hover {
    animation-name: blink;
    animation-duration: 0.2s;
    animation-timing-function: steps(1);
}

@keyframes blink {
    0%, 20% {opacity: 0;}
    30% {opacity: 1;}
    100% {opacity: 0;}
}

.stripes {
    background-color: rgba(0, 0, 0, 0.5);
    background: repeating-linear-gradient(
        #3D5A99,
        #3D5A99 4px,
        #6B3D8C 4px,
        #6B3D8C 8px
    );
}

</style>