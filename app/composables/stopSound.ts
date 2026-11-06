export function stopSound(audioId : string) {
    let audio = document.getElementById(audioId) as HTMLAudioElement;
    audio.pause()
    audio.currentTime = 0; 
    return
}