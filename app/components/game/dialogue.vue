<template>
  <div class="dialogue">
    <div class="text-2xl font-bold font-pixel p-[32px]">
        {{currText}}
    </div>
    <div v-if="buttonsVisible" class="button-yes cursor-interact-sprite absolute top-[116px] left-[360px]" @click="item === 'pc' ? $emit('openComputer') : $emit('openConsole')">
    </div>
    <div v-if="buttonsVisible" class="button-no cursor-interact-sprite absolute top-[116px] left-[480px]" @click="closeDialogue">
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()
type Item = "console" | "pc" | "welcome"
const props = withDefaults(defineProps<{
    item?: Item
}>(), {
    item: "pc"
})

const emit = defineEmits(['closeDialogue', 'openComputer', 'openConsole'])

const currText = ref("");
const pcText = computed(() => t('game.pcText'));
const consoleText = computed(() => t('game.consoleText'))
const welcomeText = computed(() => t('game.welcomeText'))
const typeDelay = 25

let letterCount = 0;
let buttonsVisible = ref(false)

function typewriterEffect(item: Item) {
    let timer = setInterval(() => {
        if(item === "pc") {
            if(currText.value.length === pcText.value.length) {
                buttonsVisible.value = true;
                clearInterval(timer);
                return;
            } 
            currText.value += pcText.value[letterCount++];
        }
        else if (item == "console") {
            if(currText.value.length === consoleText.value.length) {
                buttonsVisible.value = true;
                clearInterval(timer)
                return;
            }
            currText.value += consoleText.value[letterCount++];
        }
        else if (item == "welcome") {
            if(currText.value.length === welcomeText.value.length) {
                clearInterval(timer)
                return;
            }
            currText.value += welcomeText.value[letterCount++];
        }
    }, typeDelay);
}

function closeDialogue() {
    emit('closeDialogue');
    currText.value = "";
    buttonsVisible.value = false;
}

onMounted(() => {
    typewriterEffect(props.item);
})

</script>

<style>
.dialogue {
    width: 608px;
    height: 204px;
    background-image: url('/sprites/dialogue.png');
    background-size: 608px 204px;
    image-rendering: pixelated;
}

.button-yes {
    width: 104px;
    height: 64px;
    background-image: url('/sprites/yes.png');
    background-size: 104px 64px;
    image-rendering: pixelated;
}
.button-yes:hover {
    background-image: url('/sprites/yes_hover.png');
}

.button-no {
    width: 104px;
    height: 64px;
    background-image: url('/sprites/no.png');
    background-size: 104px 64px;
    image-rendering: pixelated;
}

.button-no:hover {
    background-image: url('/sprites/no_hover.png');
}

</style>