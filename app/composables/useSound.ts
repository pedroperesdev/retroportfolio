export function useSound(audioId : string) {
    let audio = document.getElementById(audioId) as HTMLAudioElement;
    if(audioId == 'main-music') {
        audio.volume = 0.4
    }
    if(audioId == 'click-sound') {
        audio.pause()
        audio.currentTime = 0;
    }
    audio.play();
    return

}