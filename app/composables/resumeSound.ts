export function resumeSound(audioId : string) {
    let audio = document.getElementById(audioId) as HTMLAudioElement;
    audio.play()
    return
}