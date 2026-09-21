<template>
  <div class="flex flex-col items-center absolute w-[640px] h-[640px] z-10 stripes"
  @click="$emit('changeWindow', 'select')"
  >
    <div class="title mt-40"/>
    <div class="mt-20 text-bg px-4 prevent-select blink">
        <h1 class="text-3xl text-purple-200 font-pixel">Click anywhere to begin</h1>
    </div>
    <div class="flex mt-24 gap-10">
        <div class="icon-mail blink-hover" @click.stop="$emit('openLink', 'mail')"/>
        <div class="icon-linkedin blink-hover" @click.stop="$emit('openLink', 'linkedin')"/>
        <div class="icon-github blink-hover" @click.stop="$emit('openLink', 'github')"/>
    </div>
  </div>
</template>

<script lang="ts" setup>



</script>

<style scoped>

.stripes {
    background-color: rgba(0, 0, 0, 0.5);
    background: repeating-linear-gradient(
        #3D5A99,
        #3D5A99 4px,
        #6B3D8C 4px,
        #6B3D8C 8px
    );
}

.title {
    image-rendering: pixelated;
    width: 368px;
    height: 120px;
    background-image: url('sprites/title.png');
    background-size: 368px 120px;
    animation: upDown 5s infinite ease-in-out;
}

@keyframes upDown {
    0%, 100%   { transform: translateY(0px); }
    50%  { transform: translateY(16px); }
}

.icon-mail {
    image-rendering: pixelated;
    width: 68px;
    height: 68px;
    background-image: url('sprites/mail.png');
    background-size: 68px 68px;
}

.icon-mail:hover {
    background-image: url('sprites/mail_border.png');
    transform: scale(1.3);
}

.icon-linkedin {
    image-rendering: pixelated;
    width: 68px;
    height: 68px;
    background-image: url('sprites/linkedin.png');
    background-size: 68px 68px;
}

.icon-linkedin:hover {
    background-image: url('sprites/linkedin_border.png');
    transform: scale(1.3);
}

.icon-github {
    image-rendering: pixelated;
    width: 68px;
    height: 68px;
    background-image: url('sprites/github.png');
    background-size: 68px 68px;
}

.icon-github:hover {
    background-image: url('sprites/github_border.png');
    transform: scale(1.3);

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


</style>