export function useSound(audioId : string) {
    let audio = document.getElementById(audioId) as HTMLAudioElement;
    if(audioId == 'main-music') {
        audio.volume = 0.4
        audio.play();
        return;
    }
    const sfx = audio.cloneNode() as HTMLAudioElement;
    sfx.volume = audio.volume;
    sfx.play();
    return
}