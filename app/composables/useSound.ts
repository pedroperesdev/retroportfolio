export function useSound(audioId : string) {
    let audio = document.getElementById(audioId) as HTMLAudioElement;
    if(audioId == 'main-music') {
        audio.volume = 0.4
        audio.play();
        return;
    }
    // reuse the same audio element
    audio.currentTime = 0;
    audio.play();
    return
}
